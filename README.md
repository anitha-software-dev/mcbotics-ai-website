# McBotics AI — Website

> Modern AI-focused website showcasing McBoticsAI's next-gen automation solutions and capabilities.

A sleek, responsive, dark-mode SaaS and enterprise landing platform built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. It highlights AI automation workflows, scalable architecture frameworks, service offerings, and IP protection capabilities.

---

## ⚡ Key Features

- **Hero Experience**: Fullscreen auto-transitioning dark visual carousel with glowing brand badge and animated call-to-action.
- **Dynamic Vision Statement**: Interactive typewriter effect translating strategy into technical execution.
- **Interactive Service Portfolio**: 3D Coverflow carousel powered by Swiper with custom pagination and rotating accents.
- **Vision-to-Scale Process**: 3-step interactive roadmap with synchronized visual preview cards.
- **Feature Comparison**: Side-by-side evaluation table contrasting McBotics AI against traditional approaches.
- **Answers & FAQ**: Accordion-style expandable questions for founders and teams.
- **Interactive Contact Page**: Comprehensive inquiry form with client-side validation and dedicated direct channels.
- **Modern Dark UI**: Glassmorphic styling, mouse-following radial glows, starfield particle animations, and AOS scroll effects.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) & PostCSS |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [AOS](https://michalsnik.github.io/aos/), [React Type Animation](https://github.com/maxmarinich/react-type-animation) |
| **Carousel / Slider** | [Swiper v12](https://swiperjs.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📄 Main Pages & Sections

- **Home (`/`)**:
  - `Hero`: Brand positioning and consultation CTA
  - `Vision`: Typewriter animated mission statement
  - `Benefits`: Why McBotics AI timeline cards
  - `Services`: 3D coverflow carousel of core capabilities
  - `Process`: 3-phase Vision-to-Scale methodology
  - `FAQ`: Accordion answering client questions
  - `Comparison`: McBotics AI vs. competitors
  - `Contact CTA`: Mouse-glow particle banner
- **Contact (`/contact`)**: Dedicated contact channels, inquiry submission form, and FAQ.
- **Legal (`/privacy`, `/terms`)**: Comprehensive Privacy Policy and Terms of Service.

---

## 📂 Project Structure

```text
mcbotics-ai-website/
├── public/
│   └── images/              # Optimized brand assets, icons, and hero graphics
├── src/
│   ├── components/          # Reusable UI components (Header, Footer, SectionHeader)
│   ├── sections/            # Landing page sections (Hero, Services, Process, etc.)
│   ├── pages/               # Route pages (Home, ContactPage, Privacy, Terms)
│   ├── data/                # Static data & blogs
│   ├── App.jsx              # Root application router & layout
│   ├── main.jsx             # Entry point & AOS initialization
│   └── index.css            # Tailwind directives & custom keyframes
├── .env.example             # Example environment configuration
├── .gitignore               # Ignored dependencies & build artifacts
├── package.json             # Dependencies and build scripts
├── tailwind.config.js       # Custom dark theme color tokens
└── vite.config.js           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v8.0.0` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/anitha-software-dev/mcbotics-ai-website.git

# Navigate to project directory
cd mcbotics-ai-website

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Environment

Ensure sensitive configuration is never committed. Copy `.env.example` to create `.env.local` for local secrets:

```bash
cp .env.example .env.local
```

---

## 📄 License

This project is proprietary and developed for McBotics AI. All rights reserved.
