import * as vscode from 'vscode';
import * as dotenv from 'dotenv';
dotenv.config();

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('autohinter.generateSteps', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const selection = editor.selection;
    const text = editor.document.getText(selection);

    if (!text.trim()) {
      vscode.window.showErrorMessage("Please select a comment to generate steps for.");
      return;
    }

    // Replace this with API call later
    const steps = await generateSteps(text);

    vscode.window.showInformationMessage("Steps generated!");
    const newPosition = selection.end.translate(1);
    editor.edit(editBuilder => {
      editBuilder.insert(newPosition, `\n// ${steps.join('\n// ')}`);
    });
  });

  context.subscriptions.push(disposable);
}

async function generateSteps(input: string): Promise<string[]> {
  const apiKey = vscode.workspace.getConfiguration().get<string>('autohinter.openaiApiKey');

  if (!apiKey || apiKey.trim() === '') {
    vscode.window.showErrorMessage("Missing OpenAI API key.");
    return [];
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Break this down step by step for code: "${input}"`
          }
        ],
        temperature: 0.5
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API Error:", errorText);
      vscode.window.showErrorMessage(`OpenAI API Error: ${response.statusText}`);
      return [];
    }

    const json = await response.json();
    const content = json.choices?.[0]?.message?.content;

    if (!content) {
      vscode.window.showErrorMessage("OpenAI response was empty or malformed.");
      console.error("OpenAI API response:", json);
      return [];
    }

    const steps = content
      .split('\n')
      .map(line => line.replace(/^[-*\d.]+\s*/, '').trim())
      .filter(line => line.length > 0);

    return steps;
  } catch (error) {
    console.error("Unexpected error calling OpenAI:", error);
    vscode.window.showErrorMessage("Unexpected error contacting OpenAI.");
    return [];
  }
}
