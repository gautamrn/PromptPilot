import * as vscode from 'vscode';

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

    const steps = await generateSteps(text);

    if (!steps.length) return;

    vscode.window.showInformationMessage("Steps generated!");
    const newPosition = selection.end.translate(1);
    editor.edit(editBuilder => {
      editBuilder.insert(newPosition, `\n// ${steps.join('\n// ')}`);
    });
  });

  context.subscriptions.push(disposable);
}

async function generateSteps(input: string): Promise<string[]> {
  const apiKey = vscode.workspace.getConfiguration().get<string>('autohinter.geminiApiKey');

  if (!apiKey || apiKey.trim() === '') {
    vscode.window.showErrorMessage("Missing Gemini API key. Please add it in Settings.");
    return [];
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Break down this programming task into a concise numbered list of general coding steps.  
                      Each step should be short and clear, and followed by a blank line.  
                      Do not add extra explanation, just the steps. Add a new blank line in between each line as well and one at the end: "${input}"`
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      vscode.window.showErrorMessage(`Gemini API Error: ${response.statusText}`);
      console.error("Gemini error:", response.status, errorText);
      return [];
    }

    const json = await response.json();
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text || '';

    const steps = text
      .split('\n')
      .map(line => line.replace(/^[-*\d.]+\s*/, '').trim())
      .filter(line => line.length > 0);

    return steps;
  } catch (error) {
    console.error("Unexpected error calling Gemini:", error);
    vscode.window.showErrorMessage("Unexpected error contacting Gemini API.");
    return [];
  }
}
