# 🧠 Autohinter VS Code Extension

**Autohinter** is a powerful AI assistant for developers. It enhances productivity by converting natural-language comments into step-by-step programming instructions using **Google's Gemini AI**, and also supports explanation, refactoring, and commit message suggestions.

---

## ✨ Features

- 🪄 **Generate Steps**: Turn a natural comment into a numbered breakdown
- 🧠 **Explain Code**: Understand unfamiliar code blocks in plain English
- 🛠 **Refactor Suggestions**: Get concise, idiomatic improvements
- 📝 **Commit Message Generator**: Summarize recent code edits into commit messages
- 🧪 **Interactive Playground**: Try out prompts with live AI responses and results

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/autohinter.git
cd autohinter
npm install
```

### 2. Open in VS Code

- Open the folder in VS Code
- Press `F5` to launch the **Extension Development Host**

---

## 🔑 Gemini API Key Setup

Autohinter requires a **Gemini API key** from Google:

1. Visit [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Generate an API key
3. In **VS Code Settings**:
   - Open **File → Preferences → Settings**
   - Search for **Autohinter**
   - Paste your key into the `Gemini API Key` field

> 🔐 Your key is stored locally and never shared.

---

## 🧪 Usage

### 🪄 Generate Steps (Ctrl + Alt + S)

1. Write a comment like:

   ```js
   // Calculate average of random numbers
   ```

2. Highlight the comment

3. Press `Ctrl + Alt + S`

4. Result:

   ```js
   // Calculate average of random numbers
   // 1. Initialize a sum variable

   // 2. Generate random numbers in a loop

   // 3. Add them to the sum

   // 4. Divide sum by count
   ```

### 🧠 Explain Code

- Highlight any code block
- Open the Command Palette → `Autohinter: Explain Highlighted Code`

### 🛠 Suggest Refactor

- Highlight any code block
- Open the Command Palette → `Autohinter: Suggest Refactor`

### 📝 Suggest Commit Message

- Open the Command Palette → `Autohinter: Suggest Commit Message`
- Autohinter uses your current file or changes to generate a meaningful commit message and inserts it into the Git input box

### 🧪 Playground Panel

- Open the Command Palette → `Autohinter: Open Autohinter Playground`
- Use built-in buttons to:
  - ✨ Generate Steps
  - 🧠 Explain Code
  - 🛠 Refactor Code
- Output is displayed directly below the input

---

## ⚙️ Configuration

| Setting                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `autohinter.geminiApiKey` | Your Gemini API key (required)                   |
| `autohinter.openaiApiKey` | (Optional) Support for future OpenAI integration |

---

## 💡 Example Prompts

```js
// Validate all user input

// Send a welcome email to each new user

// Merge two sorted arrays into one

// Sort a list using quicksort

// Fetch data from an API and handle errors
```

---

## 🧱 Built With

- [TypeScript](https://www.typescriptlang.org/)
- [VS Code Extension API](https://code.visualstudio.com/api)
- [Google Gemini API](https://developers.generativeai.google/)
