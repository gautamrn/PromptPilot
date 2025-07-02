import * as vscode from 'vscode';
import { callGemini } from '../utils/geminiClient';
import { getContextInfo } from '../utils/contextHelper';

export function registerPlaygroundPanelCommand(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('PromptPilot.playgroundPanel', () => {
      const panel = vscode.window.createWebviewPanel(
        'PromptPilot.playground',
        'Prompt Pilot Playground',
        vscode.ViewColumn.One,
        { enableScripts: true },
      );

      panel.webview.html = getWebviewHtml();

      panel.webview.onDidReceiveMessage(async (msg) => {
        const editor = vscode.window.activeTextEditor!;
        let prompt = '';
        switch (msg.command) {
          case 'steps':
            prompt = `Break down this task into steps:\n\n${msg.text}`;
            break;
          case 'explain':
            prompt = `${getContextInfo()}\n\nExplain this code:\n\n${msg.text}`;
            break;
          case 'refactor':
            prompt = `${getContextInfo()}\n\nRefactor this code:\n\n${msg.text}`;
            break;
        }
        const result = await callGemini(prompt);
        panel.webview.postMessage({ command: 'display', text: result });
      });

      function getWebviewHtml() {
        const escape = (s: string) => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Prompt Pilot Playground</h1>
  <textarea id="input" style="width:100%;height:100px"></textarea>
  <button onclick="send('steps')">Generate Steps</button>
  <button onclick="send('explain')">Explain Code</button>
  <button onclick="send('refactor')">Refactor Code</button>
  <h2>Output</h2>
  <pre id="output"></pre>
  <script>
    const vscode = acquireVsCodeApi();
    function send(cmd) {
      const text = document.getElementById('input').value;
      vscode.postMessage({ command: cmd, text });
    }
    window.addEventListener('message', event => {
      document.getElementById('output').textContent = event.data.text;
    });
  </script>
</body>
</html>
      `;
      }
    }),
  );
}
