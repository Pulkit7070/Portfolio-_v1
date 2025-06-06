# 🌟 Personal Portfolio

🚀 A modern and interactive **portfolio website** built using **React, Three.js, and Tailwind CSS** to showcase projects, skills, and experience.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React** - UI Library
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth animations & transitions
- 🌐 **React Router DOM** - Client-side navigation

### **Backend**
- 🚀 **Express.js** - Lightweight backend framework
- 📬 **Nodemailer** - Email service
- ✉️ **EmailJS** - Alternative for contact forms
- 🔗 **Axios** - HTTP request handling

### **3D Graphics**
- 🎮 **Three.js** - 3D rendering engine
- 🎨 **React Three Fiber** - React bindings for Three.js
- 🏗️ **Drei** - Utility components for Three.js

### **Build & Deployment**
- ⚡ **Vite** - Fast development build tool

---

## 📂 Project Structure

```
/portfolio2
│── /src
│   ├── /components  # Reusable UI components  
│   ├── /assets      # Images, icons, and static assets  
│   ├── /pages       # Different sections of the portfolio  
│   ├── /styles      # Tailwind & global styles  
│   ├── /utils       # Helper functions & API calls  
│── /public          # Static files  
│── package.json     # Project dependencies & scripts  
│── tailwind.config.js  # Tailwind CSS configuration  
│── vite.config.js   # Vite configuration  
│── .env             # Environment variables  
```

---

## 🚀 Features

✅ **Interactive 3D elements** with Three.js  
✅ **Smooth animations** using Framer Motion  
✅ **Email contact form** (via EmailJS/Nodemailer)  
✅ **Responsive design** (Mobile & Desktop friendly)  
✅ **Dark mode support**  

---

## 📦 Installation & Setup

To run this portfolio locally:

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/portfolio2.git
cd portfolio2
```

### 2️⃣ Install dependencies:
```sh
npm install
```

Or install all libraries manually:
```sh
npm install @emailjs/browser @react-three/drei @react-three/fiber axios body-parser cors dotenv express framer-motion maath nodemailer react react-dom react-parallax-tilt react-router-dom react-vertical-timeline-component three @types/react @types/react-dom @vitejs/plugin-react autoprefixer postcss tailwindcss vite
```

### 3️⃣ Start the development server:
```sh
npm run dev
```

### 4️⃣ Build the project:
```sh
npm run build
```

---

## 📧 Email Configuration

To enable the contact form, update your **.env** file with your **EmailJS** or **Nodemailer** credentials:
```sh
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

---

## 🌍 Deployment

This portfolio can be deployed on:
- **Vercel**
- **Netlify**
- **GitHub Pages**

To deploy on Vercel:
```sh
npm run build
vercel deploy
```
