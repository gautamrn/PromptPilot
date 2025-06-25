# 🧠 Autohinter VS Code Extension

**Autohinter** is a lightweight AI assistant for developers. It converts natural-language comments into step-by-step programming instructions using OpenAI’s GPT models.

---

## ✨ Features

* Write a comment like:

  ```js
  // Assign every student a random number
  ```
* Highlight it and press `Ctrl + Alt + S`
* Autohinter transforms it into something like:

  ```js
  // Assign every student a random number
  // 1. Loop through each student in the list.
  // 2. Generate a random number.
  // 3. Assign the number to the current student.
  ```

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/autohinter.git
cd autohinter
npm install
```

### 2. Open in VS Code

* Open the folder in VS Code
* Press `F5` to launch the Extension Development Host

---

## 🔑 OpenAI API Key Setup

Autohinter requires an OpenAI API key to function.

1. Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Generate a new secret key (starts with `sk-`)
3. In the **Extension Development Host** window:

   * Go to **File → Preferences → Settings**
   * Search for **Autohinter**
   * Paste your API key into the `OpenAI API Key` field

> 💡 Your key is stored locally and never shared.

---

## 🧪 Usage

1. Write a high-level comment
2. Highlight the comment
3. Press `Ctrl + Alt + S`
4. Watch step-by-step logic appear just below!

---

## ⚙️ Configuration

| Setting                   | Description                    |
| ------------------------- | ------------------------------ |
| `autohinter.openaiApiKey` | Your OpenAI API key (required) |

---

## 💡 Example Prompts

* `// Validate all user input`
* `// Send a welcome email to each new user`
* `// Merge two sorted arrays into one`

---

## 🧱 Built With

* [TypeScript](https://www.typescriptlang.org/)
* [VS Code Extension API](https://code.visualstudio.com/api)
* [OpenAI Chat Completions API](https://platform.openai.com/docs/guides/gpt)

---
