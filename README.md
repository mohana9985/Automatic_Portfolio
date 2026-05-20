# Automatic Portfolio

A premium, neon-themed React portfolio designed to showcase expertise in Generative AI, LangGraph, LLMs, and modern full-stack development. Features a streaming AI chatbot, live GitHub integration, dynamic contact form, and smooth animations powered by Tailwind CSS and Framer Motion.

**Live:** [www.kuretimohana.dev](https://www.kuretimohana.dev)

## 📑 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Configure Environment Variables](#2-configure-environment-variables)
  - [3. Set Up the AI Backend](#3-set-up-the-ai-backend)
  - [4. Set Up the Frontend](#4-set-up-the-frontend)
- [Project Structure](#-project-structure)
- [Frontend Components](#-frontend-components-srccomponents)
- [Backend Architecture](#️-backend-architecture-srcbackend)
- [Deployment](#-deployment)
- [Built With](#️-built-with)
- [License](#-license)

---

## 📋 Prerequisites

- **[Node.js](https://nodejs.org/)** (v16.0 or higher)
- **[Python 3](https://www.python.org/)** (v3.10 or higher)
- **[Git](https://git-scm.com/)**
- A free **[Groq API key](https://console.groq.com/keys)**
- A free **[Resend API key](https://resend.com)**

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/mohana9985/Automatic_Portfolio.git
cd Automatic_Portfolio
```

### 2. Configure Environment Variables

Create a `.env` file in the **root** of the project:

```env
# Frontend (Vite)
VITE_GITHUB_USERNAME=your_github_username
VITE_GITHUB_PROFILE_URL=https://github.com/your_github_username
VITE_LINKEDIN_URL=https://linkedin.com/in/your_linkedin
VITE_CV_URL=https://drive.google.com/your_cv_link
VITE_CONTACT_EMAIL=your_email@gmail.com
VITE_API_URL=http://127.0.0.1:8000

# Backend (Python)
GROQ_API_KEY=your_groq_api_key
RESEND_API_KEY=your_resend_api_key
RECIPIENT_EMAIL=your_email@gmail.com
RESEND_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
ALLOWED_ORIGINS=http://localhost:5173
```

> For local development only, you can override `VITE_API_URL` in a `.env.local` file — Vite gives it priority over `.env`.

### 3. Set Up the AI Backend

```bash
# Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Start the backend server
cd src/backend
uvicorn main:app --reload
```

Backend will be available at `http://127.0.0.1:8000`.

### 4. Set Up the Frontend

Open a **new** terminal from the project root:

```bash
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```text
Automatic_Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and media
│   ├── backend/            # Python FastAPI backend
│   │   ├── main.py         # API endpoints, Groq/Resend integration, CORS config
│   │   └── requirements.txt
│   ├── components/         # React UI components
│   │   ├── Chatbot.jsx     # Floating AI Assistant widget (lazy loaded)
│   │   ├── Contact.jsx     # Contact form with Resend email (lazy loaded)
│   │   ├── Experience.jsx  # Professional & academic timeline
│   │   ├── Github.jsx      # Live GitHub repo feed (lazy loaded)
│   │   ├── Hero.jsx        # Landing section
│   │   ├── Navbar.jsx      # Responsive navigation with CV download
│   │   ├── Projects.jsx    # Featured projects grid
│   │   ├── Prompts.jsx     # AI prompt showcase cards
│   │   └── Skills.jsx      # Categorized skills display
│   ├── App.jsx             # Root component with lazy loading setup
│   ├── index.css           # Global Tailwind directives and animations
│   └── main.jsx            # React DOM entry point
├── .env                    # Environment variables (gitignored)
├── index.html              # HTML template
├── requirements.txt        # Python dependencies
├── vite.config.js          # Vite bundler config
└── package.json            # Node dependencies
```

---

## 🧩 Frontend Components (src/components)

- **`Navbar.jsx`** — Responsive top navigation with smooth-scroll links, mobile hamburger menu, and a CV download button (URL from `VITE_CV_URL`).
- **`Hero.jsx`** — Landing section with profile picture, titles, a mock code terminal, and call-to-action buttons.
- **`Projects.jsx`** — Grid of featured projects. AI-focused projects get a pulsing neon highlight.
- **`Prompts.jsx`** — Copyable AI prompt cards showcasing prompt engineering examples.
- **`Skills.jsx`** — Categorized skills (AI & Models, Frameworks, Backend, DevOps) with glowing icons.
- **`Experience.jsx`** — Dual timeline for professional internships and academic background.
- **`Github.jsx`** *(lazy loaded)* — Fetches live repos from GitHub API, filters forks, displays top 4 most recently updated. Username from `VITE_GITHUB_USERNAME`.
- **`Contact.jsx`** *(lazy loaded)* — Contact info panel (email, phone, location) and animated form that POSTs to the backend. Links from `VITE_LINKEDIN_URL`, `VITE_GITHUB_PROFILE_URL`, `VITE_CONTACT_EMAIL`.
- **`Chatbot.jsx`** *(lazy loaded)* — Floating AI assistant that streams responses from the Groq-powered backend.

> `Github`, `Contact`, and `Chatbot` are lazy loaded via `React.lazy()` to reduce the initial JS bundle size.

---

## ⚙️ Backend Architecture (src/backend)

Built as a lightweight FastAPI server powering the AI chatbot and contact form.

**`main.py`** exposes three endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET / HEAD` | `/` | Health check |
| `POST` | `/chat` | Streams AI responses via Groq (LLaMA 3) |
| `POST` | `/contact` | Sends contact form emails via Resend |

**Key configuration:**
- `ALLOWED_ORIGINS` — comma-separated list of allowed frontend URLs for CORS (e.g. `https://www.kuretimohana.dev,http://localhost:5173`)
- `RECIPIENT_EMAIL` — inbox that receives contact form messages
- `RESEND_FROM_EMAIL` — sender label shown in the email "From" field
- `GROQ_API_KEY` — authenticates with the Groq API
- `RESEND_API_KEY` — authenticates with the Resend email API

---

## 🌐 Deployment

### Frontend → Vercel

Set these environment variables in your Vercel dashboard:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://automatic-portfolio.onrender.com` |
| `VITE_GITHUB_USERNAME` | `mohana9985` |
| `VITE_GITHUB_PROFILE_URL` | `https://github.com/mohana9985` |
| `VITE_LINKEDIN_URL` | your LinkedIn URL |
| `VITE_CV_URL` | your Google Drive CV link |
| `VITE_CONTACT_EMAIL` | your email address(es) |
| `UV_LINK_MODE` | `copy` |

### Backend → Render

Set these environment variables in your Render dashboard:

| Variable | Value |
|----------|-------|
| `GROQ_API_KEY` | your Groq API key |
| `RESEND_API_KEY` | your Resend API key |
| `RECIPIENT_EMAIL` | your email address |
| `RESEND_FROM_EMAIL` | `Portfolio Contact <onboarding@resend.dev>` |
| `ALLOWED_ORIGINS` | `https://www.kuretimohana.dev,https://kuretimohana.dev` |

**Start command (Render):**
```bash
cd src/backend && uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## 🛠️ Built With

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Python, FastAPI, Uvicorn, Pydantic, HTTPX
- **AI Engine**: Groq API (LLaMA 3.1)
- **Email**: Resend API
- **Hosting**: Vercel (frontend) · Render (backend)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
