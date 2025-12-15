# Antony Mwandiki – Portfolio Website

🚀 **Live Demo:** https://tonio-portfolio.vercel.app/

A modern, responsive personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, showcasing my skills, projects, and professional background as a **Full Stack Software Developer**.

---

## ✨ Features

- ⚡ Built with **Next.js + TypeScript**
- 🎨 Modern UI using **Tailwind CSS**
- 🌙 Light / Dark mode toggle
- 📱 Fully responsive (mobile-first)
- 🧭 Smooth scrolling single-page layout
- 🎬 Animations with **Framer Motion**
- 📩 Functional contact form (server-side email handling)
- 🚀 Deployed on **Vercel**

---

## 🛠 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Handling:** Nodemailer
- **Deployment:** Vercel

---

## 📂 Project Structure

├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ ├── About.tsx
│ ├── Projects.tsx
│ ├── Blog.tsx
│ └── Contact.tsx
├── context/
│ └── ThemeContext.tsx
├── pages/
│ ├── index.tsx
│ └── api/
│ └── contact.ts
├── styles/
│ └── globals.css
├── public/
├── tailwind.config.js
├── tsconfig.json
└── README.md

yaml
Copy code

---

## 🚀 Getting Started Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create environment variables
Create a .env.local file in the root directory:

env
Copy code
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
⚠️ Use a Gmail App Password, not your normal Gmail password.

4️⃣ Run the development server
bash
Copy code
npm run dev
Open http://localhost:3000 to view it in the browser.

📬 Contact Form
The contact form sends emails securely using Nodemailer via a Next.js API route.

Server-side validation

Rate-limited to prevent abuse

Environment variables protected on deployment

📸 Preview
🔗 Live Site:
👉 https://tonio-portfolio.vercel.app/

👨‍💻 About Me
I’m Antony Mwandiki, a Full Stack Software Developer with a background in Applied Physics and Computer Science.
I specialize in building scalable, user-focused web applications using modern technologies.

⭐ Support
If you like this project:

⭐ Star the repository

🧑‍💻 Fork it

📢 Share it

