import * as vscode from 'vscode';
import { callGemini } from '../utils/geminiClient';
import { getContextInfo } from '../utils/contextHelper';

export function registerExplainCodeCommand(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('autohinter.explainCode', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      const selection = editor.selection;
      const code = editor.document.getText(selection);
      if (!code) {
        vscode.window.showErrorMessage('Highlight code to explain.');
        return;
      }

      const contextInfo = getContextInfo();
      const prompt = `${contextInfo}\n\nExplain this code in 3–5 concise bullets:\n\n${code}`;
      const explanation = await callGemini(prompt);

      const output = `\n// ${explanation
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l)
        .join('\n// ')}`;
      editor.edit((edit) => {
        edit.insert(selection.end.translate(1), output);
      });
    }),
  );
}
