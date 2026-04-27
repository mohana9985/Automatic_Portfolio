# Kureti Mohana SambaSiva - AI Engineer Portfolio

A premium, neon-themed React portfolio designed specifically to showcase expertise in Generative AI, LangGraph, LLMs, and modern full-stack development. It features dynamic API integrations, glowing accents, and smooth animations powered by Tailwind CSS and Framer Motion.

## 📑 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Set Up the AI Backend](#2-set-up-the-ai-backend-fastapi--groq)
  - [3. Set Up the Frontend](#3-set-up-the-frontend-reactvite)
- [Project Structure](#-project-structure)
- [Component Usage](#-component-usage-srccomponents)
- [Built With](#️-built-with)
- [License](#-license)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
*   **[Node.js](https://nodejs.org/)** (v16.0 or higher recommended)
*   **[npm](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**
*   **[Python 3](https://www.python.org/)** (Required for the AI backend)
*   **[Git](https://git-scm.com/)**

---

## 🚀 Quick Start

Follow the instructions below to run both the frontend UI and the AI backend locally.

### 1. Clone the Repository
```bash
git clone https://github.com/mohana9985/Automatic_Portfolio.git
cd Automatic_Portfolio
```

### 2. Set Up the AI Backend (FastAPI & Groq)
The portfolio includes an intelligent chatbot powered by the lightning-fast Groq API.

1. Obtain a free API key from the [Groq Console](https://console.groq.com/keys).
2. Create a `.env` file in the root directory and add your key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
3. Open a terminal and start the backend:
   ```bash
   # Create and activate a virtual environment (optional but recommended)
   python -m venv .venv
   source .venv/bin/activate  # On Windows use: .venv\Scripts\activate

   # Install backend dependencies
   pip install -r requirements.txt

   # Start the backend server
   cd src/backend
   uvicorn main:app --reload
   ```

### 3. Set Up the Frontend (React/Vite)
Open a **new** terminal window and run:

```bash
# Navigate to the root directory if not already there
cd Automatic_Portfolio

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173` and it will automatically connect to the backend at `http://127.0.0.1:8000`.

---

## 📁 Project Structure

The portfolio is built with Vite + React. Below is the structured breakdown of the workspace and the purpose of every file in the project ecosystem.

```text
Automatic_Portfolio/
├── .env                    # Environment variables (e.g., GROQ_API_KEY)
├── public/                 # Static assets that don't need to be processed by Vite
├── src/
│   ├── assets/             # Images, SVGs, and other media used in the UI
│   ├── backend/            # Python FastAPI Backend
│   │   └── main.py         # AI instructions, Groq integration, and API endpoint
│   ├── components/         # All modular React view components
│   │   ├── Chatbot.jsx     # Floating AI Assistant widget and streaming UI
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Github.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Prompts.jsx
│   │   └── Skills.jsx
│   ├── App.jsx             # The root wrapper aggregating all components
│   ├── index.css           # Global Tailwind directives and custom animation classes
│   └── main.jsx            # React setup and DOM rendering entry point
├── index.html              # The main HTML template
├── requirements.txt        # Python backend dependencies
├── tailwind.config.js      # Styling design system (colors, spacing, plugins)
├── vite.config.js          # Vite bundler configuration
└── package.json            # Project metadata and dependencies
```

---

## 🧩 Frontend Components (src/components)

The UI is highly modular. Here is exactly what each section handles:

*   **`Navbar.jsx`**: The responsive top navigation bar. Handles smooth-scrolling anchor links, a mobile hamburger menu, and a "Download CV" link pointing to an external Google Drive document.
*   **`Chatbot.jsx`**: An interactive, floating AI Assistant widget that connects to the Python backend to answer questions about the portfolio. Features typing animations and markdown link rendering.
*   **`Hero.jsx`**: The landing section of the website. It houses the primary profile picture, core titles ("Gen-AI Developer"), a mockup initialization code terminal, and primary call-to-action buttons.
*   **`Projects.jsx`**: A grid layout displaying featured technical projects. Projects marked as "AI" receive a special pulsing neon border effect to stand out visually.
*   **`Prompts.jsx`**: A unique section dedicated to outlining structural prompts for AI interaction, formatted cleanly into copyable cards.
*   **`Skills.jsx`**: Categorizes technical skills (AI & Models, Frameworks & Cloud, Backend, Tools & DevOps) with clear, glowing icons for easy reading.
*   **`Experience.jsx`**: Houses two cleanly defined timelines showcasing "Professional Journey" (internships) and "Academic Background & Training" (degrees and certifications).
*   **`Github.jsx`**: Automatically communicates with the GitHub REST API (`users/mohana9985/repos`) to fetch, filter out forks, and display the user's 4 most recently updated repositories instantly.
*   **`Contact.jsx`**: The footer component offering active communication channels (Email, Phone, Location data) and an animated payload "Transmission" form.

---

## ⚙️ Backend Architecture (src/backend)

The backend is built as a lightweight, lightning-fast API designed exclusively to power the AI Assistant.

*   **`main.py`**: The core of the backend server. It initializes the **FastAPI** application, configures CORS to communicate safely with the frontend, and handles the `/chat` endpoint. It uses the `AsyncGroq` client to pass system instructions and user queries to the LLaMA 3 model, streaming the response back to the frontend in real-time.
*   **`.env`**: Stores sensitive environment variables securely (specifically the `GROQ_API_KEY`). This file is ignored by Git to prevent API keys from leaking publicly.
*   **`requirements.txt`**: A concise list of Python dependencies (`fastapi`, `uvicorn`, `pydantic`, `groq`, `python-dotenv`) required to run the server.

---

## 🛠️ Built With

*   **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide React
*   **Backend**: Python, FastAPI, Uvicorn, Pydantic
*   **AI Engine**: Groq API (LLaMA 3)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
