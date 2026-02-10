# 📘 Codolio-Assignment - Question Management Sheet

A clean, intuitive, single-page web application to manage a structured set of coding questions, inspired by modern question sheets used in structured interview preparation platforms.

This project allows users to organise questions under Topics and Sub-topics, manage progress, and reorder items using drag-and-drop — all in a simple and responsive interface.

---

## ✨ Features

- 📂 **Question Hierarchy**
  - Topic → Sub-topic → Question
- ➕ **Create Questions**
- ✏️ **Edit Questions (Inline Editing)**
- ❌ **Delete Questions**
- 🔀 **Drag & Drop Reordering**
  - Move questions across columns
- 📊 **Status Tracking**
  - To Do / Doing / Done
- 💾 **Persistent Storage**
  - Data stored in browser `localStorage`
- 🎯 **Clean & Intuitive UI**
  - Inspired by Codolio-style question sheets

---

## 🧠 Design Decisions

### Flat Data Structure
Instead of deeply nested state (Topic → Sub-topic → Questions), the application uses a **flat data model** and groups data at render time.

**Why?**
- Easier state updates
- Avoids complex nested mutations
- More scalable for future API or Zustand integration

```js
{
  task: "Two Sum",
  topic: "Arrays",
  subTopic: "Basics",
  status: "todo"
}

```

## 🛠 Tech Stack

- **React** (Vite)
- **JavaScript**
- **CSS** 
- **Browser LocalStorage**

_No backend or database is required for this assignment._

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/allknowledge34/Codolio-Assignment.git
cd Codolio-Assignment
npm install
npm run dev
```





