🧠 Autohinter VS Code Extension

Autohinter is a powerful AI assistant for developers. It enhances productivity by converting natural-language comments into step-by-step programming instructions using Google's Gemini AI, and also supports explanation, refactoring, and commit message suggestions.

✨ Features

🪄 Generate Steps: Turn a natural comment into a numbered breakdown

🧠 Explain Code: Understand unfamiliar code blocks

🛠 Refactor Suggestions: Get concise refactoring ideas

📝 Commit Message Generator: Summarize recent code edits into commit messages

🧪 Interactive Playground: Try out prompts with live AI responses

🚀 Getting Started

1. Clone and Install

git clone https://github.com/yourusername/autohinter.git
cd autohinter
npm install

2. Open in VS Code

Open the folder in VS Code

Press F5 to launch the Extension Development Host

🔑 Gemini API Key Setup

Autohinter requires a Gemini API key from Google:

Go to makersuite.google.com/app/apikey

Generate an API key

In Extension Development Host:

Open Settings (File → Preferences → Settings)

Search for Autohinter

Paste your key into the Gemini API Key field

🔐 Your key is stored locally and never shared.

🧪 Usage

🪄 Generate Steps (Ctrl + Alt + S)

Write a comment like:

// Calculate average of random numbers

Highlight the comment

Press Ctrl + Alt + S

Result:

// Calculate average of random numbers
// 1. Initialize a sum variable
// 2. Generate random numbers in a loop
// 3. Add them to the sum
// 4. Divide sum by count

🧠 Explain Code

Select code and open Command Palette (Ctrl + Shift + P)

Choose Explain Highlighted Code

🛠 Suggest Refactor

Select code and open Command Palette

Choose Suggest Refactor

📝 Suggest Commit Message

Open Command Palette

Choose Suggest Commit Message

🧪 Playground Panel

Open Command Palette

Choose Open Autohinter Playground

Use buttons to test prompts: Steps, Explain, Refactor

⚙️ Configuration

Setting

Description

autohinter.geminiApiKey

Your Gemini API key (from Google MakerSuite)

autohinter.openaiApiKey

(Optional) Fallback if you want to use OpenAI

🧱 Built With

TypeScript

VS Code Extension API

Google Gemini API