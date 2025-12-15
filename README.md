# Antony Mwandiki — Full Stack Software Developer

🔗 **Live Portfolio:** https://tonio-portfolio.vercel.app/

A production-ready personal portfolio built with **Next.js and TypeScript**, designed to showcase my engineering skills, professional experience, and real-world projects in a clean, performant, and recruiter-friendly manner.

---

## Professional Summary

I am a **Full Stack Software Developer** with a background in **Applied Physics and Computer Science**, experienced in building **scalable, maintainable, and user-focused web applications**.

My work focuses on:
- Clean architecture and maintainable code
- Performance-driven UI development
- Secure backend integrations
- Modern frontend engineering practices

This portfolio serves as a **technical and professional representation** of my work, skills, and approach to software development.

---

## Core Skills & Technologies

### Frontend
- Next.js (Pages Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Responsive & Accessible UI Design

### Backend & APIs
- Node.js
- Next.js API Routes
- Nodemailer (Email services)
- Server-side validation & rate limiting

### Tooling & Deployment
- Git & GitHub
- Vercel (Production deployment)
- Environment-based configuration
- ESLint & TypeScript strict typing

---

## Key Features

- **Modern UI/UX** with responsive design
- **Light & Dark mode** using a global theme context
- **Smooth animations** with Framer Motion
- **Single-page scroll layout** for intuitive navigation
- **Secure contact form** with server-side email handling
- **Production deployment** on Vercel
- **SEO-ready** metadata configuration

---

## Architecture Overview

├── components/ # Reusable UI components
├── context/ # Global theme management
├── pages/ # Next.js pages & API routes
│ └── api/contact.ts # Server-side email handling
├── styles/ # Global styles
├── public/ # Static assets
└── tailwind.config.js

yaml
Copy code

**Design Principles Applied:**
- Component reusability
- Separation of concerns
- Type safety across the codebase
- Scalable project structure

---

## Contact Form (Technical Overview)

The contact form is implemented using:
- **Next.js API routes** (server-side)
- **Nodemailer** for email delivery
- **Input validation** using `validator`
- **Rate limiting** to prevent abuse
- **Environment variables** for credential security

This ensures reliability, security, and production readiness.

---

## Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy code
npm install
3. Environment variables
Create a .env.local file:

env
Copy code
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@gmail.com
Note: Gmail requires an App Password when 2-Step Verification is enabled.

4. Run locally
bash
Copy code
npm run dev
Application runs at:
👉 http://localhost:3000

Deployment
The project is deployed on Vercel using:

Automatic builds from GitHub

Environment variable configuration

Optimized Next.js production settings

Live URL:
👉 https://tonio-portfolio.vercel.app/

Why This Portfolio Matters
This project demonstrates:

Real-world frontend engineering skills

Production-level backend integration

Attention to performance, UX, and security

Ability to deliver and deploy complete web solutions

It reflects how I approach professional software development, not just design.

About Me
Antony Mwandiki
Full Stack Software Developer

I am passionate about building impactful digital solutions and continuously improving my technical skills through real-world projects and collaboration.

License
MIT License — open for learning and reuse with attribution.