import * as vscode from 'vscode';

export function getContextInfo(): string {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return '';
  }

  const language = editor.document.languageId;
  const currentLine = editor.selection.active.line;
  const surroundingCode = editor.document.getText(
    new vscode.Range(Math.max(currentLine - 5, 0), 0, currentLine + 5, 1000),
  );

  return `You are editing a ${language} file. Here is the local context:\n\n${surroundingCode}`;
}
