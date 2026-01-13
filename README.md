# 🚀 Modern Software Dev Portfolio

A high-performance, visually stunning portfolio website built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. Optimized for static hosting on GitHub Pages with built-in internationalization (English/Japanese).

## ✨ Features

- **Bilingual Support (i18n):** Real-time toggle between English and Japanese using React Context (no page reloads).
- **Interactive UI:**
  - **Dynamic Background:** Animated dark theme background with drifting gradient blobs.
  - **Hero Animation:** Infinite typewriter effect for roles and descriptions.
  - **Bento Grid:** Modern "Project Tiles" layout with interactive hover states.
  - **Initial Loader:** Custom framer-motion sequence for a premium entry experience.
- **Smooth Navigation:** Header links with auto-scroll functionality for a seamless single-page experience.
- **Contact Form:** Fully functional serverless email system with a custom human-check captcha.
- **Automated CI/CD:** Built and deployed automatically via GitHub Actions.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** EmailJS (Client-side email handling)
- **Deployment:** GitHub Pages (Static Export)

## 🚀 Getting Started

### 1. Installation

git clone [https://github.com/gabrielburrows/gabrielburrows.github.io.git](https://github.com/gabrielburrows/gabrielburrows.github.io.git)\
cd gabrielburrows.github.io\
npm install

### 2. Development


npm run dev\
Open http://localhost:3000 to see the site in real-time.

### 3. Production Build

npm run build\
This generates an /out folder containing the static HTML/CSS/JS files.

## 📦 Deployment Configuration
This site is deployed to https://www.google.com/search?q=https://gabrielburrows.github.io/ using the following configuration:

Source Branch: portfolio

Output Mode: Static Export (output: 'export')

CI/CD: GitHub Actions triggers on every push to the portfolio branch, builds the Next.js site, and deploys it to the root domain.

## 📁 Project Structure

├── app/               # Main layout and page entry\
├── src/\
│   ├── components/    # Reusable UI sections (Hero, About, etc.)\
│   ├── context/       # LanguageContext for i18n\
│   └── utils/         # Translation dictionaries (EN/JP)\
├── public/            # Static assets (Resume PDF, Project Images)\
├── next.config.ts     # Build & Export configuration\
└── globals.css        # Tailwind v4 styles

## 📄 License
Copyright © 2026 Gabriel Burrows.
