# 🧠 Autohinter VS Code Extension

**Autohinter** is a lightweight AI assistant for developers. It converts natural-language comments into step-by-step programming instructions using **Google's Gemini AI** models.

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

## 🔑 Gemini API Key Setup

Autohinter requires a **Gemini API key** from Google to function.

1. Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Generate a new API key for the Gemini model
3. In the **Extension Development Host** window:

   * Go to **File → Preferences → Settings**
   * Search for **Autohinter**
   * Paste your API key into the `Gemini API Key` field

> 💡 Your key is stored locally and never shared.

---

## 🧪 Usage

1. Write a high-level comment
2. Highlight the comment
3. Press `Ctrl + Alt + S`
4. Watch step-by-step logic appear just below!

---

## ⚙️ Configuration

| Setting                   | Description                            |
| ------------------------- | -------------------------------------|
| `autohinter.geminiApiKey` | Your Gemini API key (required)        |

---

## 💡 Example Prompts

* `// Validate all user input`
* `// Send a welcome email to each new user`
* `// Merge two sorted arrays into one`

---

## 🧱 Built With

* [TypeScript](https://www.typescriptlang.org/)
* [VS Code Extension API](https://code.visualstudio.com/api)
* [Google Gemini API](https://developers.generativeai.google/)

---
