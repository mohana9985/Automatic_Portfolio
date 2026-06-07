# Automatic Portfolio

A premium, neon-themed React portfolio designed to showcase expertise in Generative AI, LangGraph, LLMs, and modern full-stack development. Features a streaming AI chatbot, live GitHub integration, dynamic contact form, smooth animations powered by Tailwind CSS and Framer Motion, and a full Neo Frost light theme.

**Live:** [www.kuretimohana.dev](https://www.kuretimohana.dev)

| Metric | Score |
|--------|-------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 90+ |

## 📑 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Configure Environment Variables](#2-configure-environment-variables)
  - [3. Set Up the AI Backend](#3-set-up-the-ai-backend)
  - [4. Set Up the Frontend](#4-set-up-the-frontend)
- [System Architecture](#️-system-architecture)
- [Project Structure](#-project-structure)
- [Frontend Components](#-frontend-components-srccomponents)
- [Backend Architecture](#️-backend-architecture-srcbackend)
- [Deployment](#-deployment)
- [Built With](#️-built-with)
- [Contributing](#-contributing)
- [Cold Start Notice](#️-cold-start-notice)
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

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                         │
│                                                             │
│  index.html ──► HTML/CSS Splash (instant, no JS)           │
│       │                                                     │
│       ▼                                                     │
│  React SPA (Vercel CDN)                                     │
│  ├── Navbar / Hero              ← eager loaded              │
│  ├── Projects / Prompts /                                   │
│  │   Skills / Experience /                                  │
│  │   Github / Contact           ← React.lazy() + Suspense  │
│  └── Chatbot                    ← React.lazy() + Suspense  │
│       │                                                     │
│       │  POST /chat  (streaming)                            │
│       │  POST /contact                                      │
│       ▼                                                     │
│  FastAPI Backend (Render)                                   │
│  ├── /chat  ──► Groq API (LLaMA 3.1-8b-instant)           │
│  └── /contact ──► Resend API (email delivery)              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     LOAD SEQUENCE                           │
│                                                             │
│  1. HTML splash renders         (0ms  — before JS)         │
│  2. React mounts, splash hides  (~100ms)                   │
│  3. LoadingScreen animates      (100ms → 550ms)            │
│  4. Hero + Navbar paint         (~550ms)                   │
│  5. Lazy chunks load            (background, on scroll)    │
│  6. User opens chatbot          → pre-warm ping fires      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  KEEP-ALIVE STRATEGY                        │
│                                                             │
│  UptimeRobot ──► GET / every 13min ──► Render (never sleeps)│
│  User opens chatbot ──► silent GET / ──► extra warm buffer │
└─────────────────────────────────────────────────────────────┘
```

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
│   │   ├── LoadingScreen.jsx # Branded loading screen shown on first visit
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
- **`LoadingScreen.jsx`** — Branded loading screen displayed on first visit. Animates name → role → spinner, then fades out after ~550ms.
- **`ErrorBoundary.jsx`** — Class component wrapping all lazy `Suspense` blocks. Catches chunk load failures (network errors, bad deploys) and renders `null` instead of crashing the app.
- **`Projects.jsx`** — Grid of featured projects. AI-focused projects get a pulsing neon highlight.
- **`Prompts.jsx`** — Copyable AI prompt cards showcasing prompt engineering examples.
- **`Skills.jsx`** — Categorized skills (AI & Models, Frameworks, Backend, DevOps) with glowing icons.
- **`Experience.jsx`** — Dual timeline for professional internships and academic background.
- **`Github.jsx`** *(lazy loaded)* — Fetches live repos from GitHub API, filters forks, displays top 4 most recently updated. Username from `VITE_GITHUB_USERNAME`.
- **`Contact.jsx`** *(lazy loaded)* — Contact info panel (email, phone, location) and animated form that POSTs to the backend. Links from `VITE_LINKEDIN_URL`, `VITE_GITHUB_PROFILE_URL`, `VITE_CONTACT_EMAIL`. Shows warming-up message if Render backend is cold starting.
- **`Chatbot.jsx`** *(lazy loaded)* — Floating AI assistant that streams responses from the Groq-powered backend. Shows warming-up message if Render backend is cold starting.

> `Projects`, `Prompts`, `Skills`, `Experience`, `Github`, `Contact`, and `Chatbot` are lazy loaded via `React.lazy()` to reduce the initial JS bundle size. All lazy blocks are wrapped in `ErrorBoundary` to prevent full-page crashes on chunk load failure.

### Bundle Size Optimization

Reduced initial JS bundle by **32%** by lazy loading below-the-fold components (`Chatbot`, `Github`, `Contact`) using `React.lazy()` and `Suspense`, improving first page load speed and Core Web Vitals score.

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Initial JS bundle | 596 kB | 405 kB | **-32%** |
| `Chatbot.jsx` | eager | lazy | deferred |
| `Github.jsx` | eager | lazy | deferred |
| `Contact.jsx` | eager | lazy | deferred |

### Image & Performance Optimization

- `profile.jpg` converted to WebP and resized to 224×224 (2× retina) — **267 kB → 4.3 kB (98% reduction)**
- `<picture>` tag with WebP source + JPEG fallback for browser compatibility
- `fetchpriority="high"` on LCP image for faster Largest Contentful Paint
- Vendor code splitting (`react`, `framer-motion`, `lucide-react`) for parallel chunk loading
- `react-icons` removed — replaced with inline SVGs (eliminates icon library from bundle)
- Instant HTML/CSS splash screen in `index.html` — displays before any JS loads, eliminates black screen on slow connections and WebView browsers (WhatsApp, Instagram in-app)
- `<link rel="preconnect">` for GitHub API to reduce DNS + TCP handshake time
- Silent `GET /` pre-warm ping fired when user **opens the chatbot** — warms backend only for users who need it, not every visitor

| Metric | Before | After |
|--------|--------|-------|
| Profile image size | 267 kB | 4.3 kB |
| Black screen on load | yes | no (HTML splash) |
| Loading screen delay | 2.6s forced | 550ms (animation-driven) |
| Performance score | ~78 | 100 |
| Accessibility score | ~79 | 100 |

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

**Chat settings:**
- Model: `llama-3.1-8b-instant` (default, overridable per request)
- Temperature: `0.3` — keeps responses focused and consistent
- Max tokens: `1024`
- Context window: last 10 messages

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

## 🌗 Light / Dark Theme

The portfolio ships with two themes toggled via the sun/moon button in the navbar. Preference persists in `localStorage`.

| | Dark (Cyberpunk Night) | Light (Neo Frost) |
|---|---|---|
| Background | `#030014` | `#ffffff` |
| Accent cyan | `#00f3ff` | `#0891b2` |
| Accent purple | `#9d00ff` | `#7c3aed` |
| Cards | glass/dark | `bg-white` + drop-shadow |
| Navbar | `bg-dark-bg/80 blur` | `rgba(255,255,255,0.85) blur` |

Theming uses CSS custom properties (`--bg-base`, `--text-primary`, `--shadow-elevation`, `--icon-bg`, etc.) overridden by `[data-theme="light"]` — all components adapt automatically.

---

## 🛠️ Built With

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Python, FastAPI, Uvicorn, Pydantic, HTTPX
- **AI Engine**: Groq API (LLaMA 3.1)
- **Email**: Resend API
- **Hosting**: Vercel (frontend) · Render (backend)

---

## 🤝 Contributing

Contributions are welcome! This project is open source and open to improvements.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

**Good first contributions:**
- Add new projects to `Projects.jsx`
- Improve prompt cards in `Prompts.jsx`
- Enhance mobile responsiveness
- Improve RAG knowledge base (`src/backend/knowledge_raw/`)

---

## ❄️ Cold Start Notice

The backend is hosted on **Render's free tier**, which spins down after 15 minutes of inactivity.

**Mitigations in place (cold start effectively eliminated):**

| Method | How it works |
|--------|-------------|
| **UptimeRobot monitor** | Pings `GET /` every 13 minutes — Render never idles long enough to sleep |
| **Frontend pre-warm ping** | `Chatbot.jsx` fires a silent `GET /` when the user opens the chat widget — backend warms up only for users who need it |

In the unlikely event the backend is still cold, the **Chatbot** and **Contact form** display graceful waiting messages:
- After 5s → *"Warming up server, please wait..."*
- After 15s → *"Still waking up, hang tight..."*

The UI stays responsive while the backend warms up in the background.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
