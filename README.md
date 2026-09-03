# Surya Pamungkas — Personal Portfolio 🚀

<div align="center">
  <img src="public/PP-Crop.png" alt="Surya Pamungkas" width="120" style="border-radius: 50%;" />
  
  <h3>Full Stack Developer & AI Engineer Enthusiast</h3>

  <p align="center">
    <a href="https://suryapamungkas.vercel.app"><strong>Explore Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://suryapamungkas.vercel.app">View Website</a>
    ·
    <a href="https://github.com/suryapamungkas/surya-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/suryapamungkas/surya-portfolio/issues">Request Feature</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E" alt="Supabase" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>
</div>

---

## 📖 About The Project

A modern, highly polished, and responsive personal portfolio crafted with **React, Vite, and Tailwind CSS**. Designed with an elegant **Premium Minimalist Dark Theme (Glassmorphism)**, this website serves as a central showcase for full-stack web applications, AI/ML models, professional certifications, and technical accomplishments.

### 🌟 Key Highlights
- **Premium Minimalist Dark Aesthetic:** Built using custom glassmorphism layers (`bg-white/5`, `border-white/10`, and smooth silver sheen gradients).
- **Featured Projects:**
  - **NusaDecarb:** Enterprise Green-Tech & ESG Advisory Platform for industrial decarbonization towards Indonesia's Net Zero Emission 2060, built with React 19, TypeScript, and Tailwind CSS.
  - **LLM Evaluation Dashboard:** Modern LLM evaluation and prompt engineering dashboard featuring parallel benchmarking, LLM-as-a-Judge grading, Ground Truth verification, and Prompt A/B testing with FastAPI, Streamlit, and Docker.
  - **RootFact (Smart Vegetable Detector):** Client-side AI Progressive Web App (PWA) featuring real-time vegetable classification with TensorFlow.js and on-device nutritional fun fact generation using Transformers.js (LaMini-Flan-T5).
  - **TrustChain UMKM:** Supply chain verification infrastructure for export-import MSMEs leveraging Blockchain and AI Analytics.
- **Interactive Feedback System:** Real-time visitor comments & feedback powered by Supabase with administrative moderation (pin/unpin).
- **Smooth Interactive Experience:** Optimized animations orchestrated via **Framer Motion** and **AOS (Animate On Scroll)**.
- **SEO & Social Sharing Ready:** OpenGraph and schema metadata integrated with `react-helmet-async`.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons & UI:** [Lucide React](https://lucide.dev/), [SweetAlert2](https://sweetalert2.github.io/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/), [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **SEO & Meta:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

### Backend & Infrastructure
- **Database & Realtime:** [Supabase](https://supabase.com/) (PostgreSQL & Realtime Channels)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Repository Structure

```plaintext
surya-portfolio/
├── public/                 # Static assets, certificate images & project screenshots
├── src/
│   ├── components/         # Reusable UI components (Navbar, Background, Cards, etc.)
│   ├── Pages/              # Page views (Home, About, Portfolio, Contact, etc.)
│   ├── utils/              # Utility functions & helper scripts
│   ├── App.jsx             # Application routes & layouts
│   ├── index.css           # Global CSS and scrollbar configurations
│   ├── main.jsx            # React root mount
│   └── supabase.js         # Supabase client configuration
├── index.html              # HTML template & SEO header tags
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind CSS theme extensions
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (Version `>= 18.x` recommended)
- `npm` or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/suryapamungkas/surya-portfolio.git
cd surya-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📦 Database Schema Setup (Supabase)

If setting up your own database instance, run the following DDL in the **Supabase SQL Editor**:

```sql
-- Projects Table
CREATE TABLE public.projects (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  title text,
  description text,
  img text,
  link text,
  github text,
  features jsonb,
  tech_stack jsonb,
  is_published boolean DEFAULT true,
  order_index int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Certificates Table
CREATE TABLE public.certificates (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  img text,
  created_at timestamptz DEFAULT now()
);

-- Realtime Portfolio Comments Table
CREATE TABLE public.portfolio_comments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  content text NOT NULL,
  user_name text NOT NULL,
  profile_image text,
  is_pinned boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
```

---

## 📬 Connect with Me

- **Website:** [suryapamungkas.vercel.app](https://suryapamungkas.vercel.app)
- **LinkedIn:** [linkedin.com/in/suryapamungkas](https://www.linkedin.com/in/suryapamungkas)
- **GitHub:** [@suryapamungkas](https://github.com/suryapamungkas)
- **Instagram:** [@suryaszy](https://www.instagram.com/suryaszy)

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <strong>Nur Hidayat Surya Pamungkas</strong></sub>
</div>