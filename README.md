# Slooze Frontend Challenge – Commodities Management System

## 📌 Project Overview

This is a role-based commodities management web app built with **React.js** for the Slooze frontend take-home challenge. The application includes secure login, role-specific access (Manager / Store Keeper), product listing, light/dark theme toggle, and dynamic UI behavior based on user roles.

---

## ✨ Features

- 🔐 **Authentication**
  - Login with email and password
  - Role-based access (Manager / Store Keeper)

- 📊 **Dashboard** (Manager only)
  - View commodity statistics (can be extended)

- 📦 **Products Page**
  - View all products (both roles)
  - Add/Edit product details
  - Data stored in LocalStorage

- 🎨 **UI Enhancements**
  - Light/Dark mode toggle (stored in localStorage)
  - Role-based UI menu visibility
  - Responsive Tailwind CSS styling

---

## 🛠️ Tech Stack

- **React.js** (Core library)
- **React Router DOM** (Routing)
- **Tailwind CSS** (Styling)
- **Context API** (Auth + Theme management)
- **LocalStorage** (Temporary product storage)

---

## 📂 Project Structure

slooze-frontend/
├── public/
├── src/
│ ├── components/
│ │ └── Navbar.jsx
│ ├── context/
│ │ ├── AuthContext.jsx
│ │ └── ThemeContext.jsx
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Dashboard.jsx
│ │ ├── Products.jsx
│ │ └── EditProduct.jsx
│ ├── ProtectedRoute.jsx
│ └── App.js
└── README.md


---

## 🚀 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/kesharsingh/slooze-frontend.git
cd slooze-frontend
npm install
npm start

How to Use
Visit the login page (/)

Use the following mock credentials:

Manager:
Email: manager@slooze.com
Password: manager123

Store Keeper:
Email: keeper@slooze.com
Password: keeper123

Based on role, you’ll see:

Manager: Dashboard + Product Management

Store Keeper: Products Only