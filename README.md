🧠 Autohinter VS Code Extension

Autohinter is a powerful VS Code extension that uses Google's Gemini AI to assist developers in writing, refactoring, and understanding code. It turns high-level comments into step-by-step tasks and adds powerful developer tools like code explanation, AI-based refactoring, and an interactive playground.

✨ Features

✅ Generate Steps

Turn natural language comments into programming logic.

// Assign every student a random number

becomes:

// Assign every student a random number
// 1. Loop through each student in the list.

// 2. Generate a random number.

// 3. Assign the number to the current student.

🧠 Explain Code

Highlight any code and run the command to get a plain English explanation.

🛠️ Suggest Refactor

Select code and let Gemini propose a cleaner, more efficient version.

🧾 Suggest Commit Message

Get a commit message based on your staged changes.

🧪 Autohinter Playground

An interactive webview to:

Prompt Gemini with custom input

Choose between: Steps, Explain, or Refactor

View output instantly below

🚀 Getting Started

1. Clone and Install

git clone https://github.com/yourusername/autohinter.git
cd autohinter
npm install

2. Open in VS Code

Open the folder in VS Code

Press F5 to launch the Extension Development Host

🔑 Gemini API Key Setup

Autohinter requires a Gemini API key from Google to function.

Visit https://makersuite.google.com/app/apikey

Generate a new API key

In VS Code:

Open File → Preferences → Settings

Search for Autohinter

Paste your Gemini key into the Gemini API Key field

💡 Your key is stored locally and never shared.

🧪 Usage

Feature

How to Use

Generate Steps

Highlight a comment → Ctrl+Alt+S or Run Command

Explain Code

Highlight code → Run Autohinter: Explain Code

Suggest Refactor

Highlight code → Run Autohinter: Suggest Refactor

Suggest Commit Message

Run Autohinter: Suggest Commit Message

Open Playground

Run Autohinter: Open Autohinter Playground

⚙️ Configuration

Setting

Description

autohinter.geminiApiKey

Your Gemini API key (required)

autohinter.openaiApiKey

(Optional) OpenAI key if you switch models

💡 Example Prompts

// Validate all user input

// Send a welcome email to each new user

// Merge two sorted arrays into one

// Generate X numbers and average them

🧱 Built With

TypeScript

VS Code Extension API

Google Gemini API
