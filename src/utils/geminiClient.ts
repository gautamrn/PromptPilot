import * as vscode from 'vscode';

export async function callGemini(prompt: string): Promise<string> {
  const apiKey = vscode.workspace.getConfiguration().get<string>('autohinter.geminiApiKey');
  if (!apiKey || apiKey.trim() === '') {
    vscode.window.showErrorMessage('Missing Gemini API key in settings.');
    return '';
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    );

    const json = await response.json();
    return json.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  } catch (err) {
    console.error('Gemini API Error:', err);
    vscode.window.showErrorMessage('Gemini API call failed.');
    return '';
  }
}
