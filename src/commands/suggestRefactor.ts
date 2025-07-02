import * as vscode from 'vscode';
import { callGemini } from '../utils/geminiClient';
import { getContextInfo } from '../utils/contextHelper';

export function registerSuggestRefactorCommand(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('PromptPilot.suggestRefactor', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selection = editor.selection;
      const code = editor.document.getText(selection);
      if (!code) {
        vscode.window.showErrorMessage('Highlight code to refactor.');
        return;
      }

      const contextInfo = getContextInfo();
      const prompt = `${contextInfo}\n\nSuggest a cleaner, more idiomatic version of this code:\n\n${code}`;
      const newCode = await callGemini(prompt);

      editor.edit((edit) => {
        edit.replace(selection, newCode);
      });

      vscode.window.showInformationMessage('Refactor applied.');
    }),
  );
}
