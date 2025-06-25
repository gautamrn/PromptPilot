import * as vscode from 'vscode';
import * as dotenv from 'dotenv';
dotenv.config();

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.generateSteps', async () => {
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
  const apiKey = process.env.OPENAI_APIKEY;

  if (!apiKey) {
    vscode.window.showErrorMessage("Missing OpenAI API key.");
    return [];
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Break this down step by step for code: "${input}"`
        }
      ],
      temperature: 0.5
    })
  });

  const json = await response.json();
  const steps = json.choices[0].message.content
    .split('\n')
    .map(line => line.replace(/^[-*\d.]+\s*/, '').trim())
    .filter(line => line.length > 0);

  return steps;
}

