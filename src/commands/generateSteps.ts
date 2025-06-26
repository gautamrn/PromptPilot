import * as vscode from 'vscode';
import { callGemini } from '../utils/geminiClient';

export function registerGenerateStepsCommand(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('autohinter.generateSteps', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const selection = editor.selection;
    const text = editor.document.getText(selection).trim();
    if (!text) {
      vscode.window.showErrorMessage("Select a comment first.");
      return;
    }

    const prompt = `Break down this programming task into a concise numbered list of coding steps.\nEach step should be short and clear.\n\n"${text}"`;
    const result = await callGemini(prompt);

    const steps = result.split('\n').map(line => line.trim()).filter(l => l);
    const newPosition = selection.end.translate(1);
    editor.edit(edit => {
      edit.insert(newPosition, `\n// ${steps.join('\n// ')}`);
    });

    vscode.window.showInformationMessage("Steps inserted.");
  }));
}
