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
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_API_KEY`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: `Break this down step by step for code: "${input}"` }],
      temperature: 0.7
    })
  });

  const data = await response.json();
  return data.choices[0].message.content.split('\n').filter(line => line.trim() !== '');
}

