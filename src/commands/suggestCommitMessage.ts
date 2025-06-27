import * as vscode from 'vscode';
import { callGemini } from '../utils/geminiClient';

export function registerSuggestCommitMessageCommand(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('autohinter.suggestCommitMessage', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage('Open a file with changes.');
        return;
      }

      const fullText = editor.document.getText();
      const prompt = `Write a short, conventional Git commit message summarizing this change:\n\n${fullText}`;
      const commitMessage = await callGemini(prompt);

      const scm = vscode.scm?.inputBox;
      if (scm) {
        scm.value = commitMessage.split('\n')[0];
      }

      vscode.window.showInformationMessage('Suggested commit message inserted.');
    }),
  );
}
