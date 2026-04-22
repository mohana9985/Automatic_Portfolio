# Kureti Mohana SambaSiva - AI Engineer Portfolio

A premium, neon-themed React portfolio designed specifically to showcase expertise in Generative AI, LangGraph, LLMs, and modern full-stack development. It features dynamic API integrations, glowing accents, and smooth animations powered by Tailwind CSS and Framer Motion.

## 📑 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
- [Project Structure](#-project-structure)
- [Component Usage](#-component-usage-srccomponents)
- [Built With](#️-built-with)
- [License](#-license)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
*   **[Node.js](https://nodejs.org/)** (v16.0 or higher recommended)
*   **[npm](https://www.npmjs.com/)** (comes with Node.js) or **[Yarn](https://yarnpkg.com/)** / **[pnpm](https://pnpm.io/)**
*   **[Git](https://git-scm.com/)**

---

## 🚀 Quick Start

Follow the instructions for your specific operating system to run the portfolio locally on your machine.

### Windows

Open Command Prompt or PowerShell and execute the following commands:

```cmd
:: 1. Clone the repository
https://github.com/mohana9985/Automatic_Portfolio.git

:: 2. Navigate into the directory
cd Automatic_portfolio

:: 3. Install dependencies
npm install

:: 4. Start the development server
npm run dev
```

### macOS

Open the Terminal app and execute the following commands:

```bash
# 1. Clone the repository
https://github.com/mohana9985/Automatic_Portfolio.git

# 2. Navigate into the directory
cd Automatic_Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### Linux

Open your preferred terminal emulator and execute the following commands:

```bash
# 1. Clone the repository
https://github.com/mohana9985/Automatic_Portfolio.git

# 2. Navigate into the directory
cd Automatic_Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The application will now be running on `http://localhost:5173`.

---

## 📁 Project Structure

The portfolio is built with Vite + React. Below is the structured breakdown of the workspace and the purpose of every file in the project ecosystem.

```text
ai-portfolio/
├── public/                 # Static assets that don't need to be processed by Vite
├── src/
│   ├── assets/             # Images, SVGs, and other media used in the UI
│   ├── components/         # All modular React view components
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
├── tailwind.config.js      # Styling design system (colors, spacing, plugins)
├── vite.config.js          # Vite bundler configuration
└── package.json            # Project metadata and dependencies
```

---

## 🧩 Component Usage (src/components)

The UI is highly modular. Here is exactly what each section handles:

*   **`Navbar.jsx`**: The responsive top navigation bar. Handles smooth-scrolling anchor links, a mobile hamburger menu, and a "Download CV" link pointing to an external Google Drive document.
*   **`Hero.jsx`**: The landing section of the website. It houses the primary profile picture, core titles ("Gen-AI Developer"), a mockup initialization code terminal, and primary call-to-action buttons.
*   **`Projects.jsx`**: A grid layout displaying featured technical projects. Projects marked as "AI" receive a special pulsing neon border effect to stand out visually.
*   **`Prompts.jsx`**: A unique section dedicated to outlining structural prompts for AI interaction, formatted cleanly into copyable cards.
*   **`Skills.jsx`**: Categorizes technical skills (AI & Models, Frameworks & Cloud, Backend, Tools & DevOps) with clear, glowing icons for easy reading.
*   **`Experience.jsx`**: Houses two cleanly defined timelines showcasing "Professional Journey" (internships) and "Academic Background & Training" (degrees and certifications).
*   **`Github.jsx`**: Automatically communicates with the GitHub REST API (`users/mohana9985/repos`) to fetch, filter out forks, and display the user's 4 most recently updated repositories instantly.
*   **`Contact.jsx`**: The footer component offering active communication channels (Email, Phone, Location data) and an animated payload "Transmission" form.

---

## 🛠️ Built With

*   **React (Vite):** Core framework
*   **Tailwind CSS:** Styling & responsive design
*   **Framer Motion:** Scroll-triggered entrances and component animations
*   **Lucide React:** Minimalist iconography 

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
