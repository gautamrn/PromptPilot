import * as vscode from 'vscode';
import { registerGenerateStepsCommand } from './commands/generateSteps';
import { registerExplainCodeCommand } from './commands/explainCode';
import { registerSuggestRefactorCommand } from './commands/suggestRefactor';
import { registerSuggestCommitMessageCommand } from './commands/suggestCommitMessage';
import { registerPlaygroundPanelCommand } from './commands/playground';

export function activate(context: vscode.ExtensionContext) {
  registerGenerateStepsCommand(context);
  registerExplainCodeCommand(context);
  registerSuggestRefactorCommand(context);
  registerSuggestCommitMessageCommand(context);
  registerPlaygroundPanelCommand(context);
}

export function deactivate() {}
