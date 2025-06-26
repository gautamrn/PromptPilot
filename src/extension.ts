import * as vscode from 'vscode';
import { registerGenerateStepsCommand } from './commands/generateSteps';

export function activate(context: vscode.ExtensionContext) {
  registerGenerateStepsCommand(context);
}

export function deactivate() {}
