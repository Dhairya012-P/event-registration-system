````markdown
# 🌐 HeliHive™: Event Registration & Digital Credentialing System

> 🚀 A full-stack MERN application designed to replace traditional paper-based event entry with a secure, real-time digital pass ecosystem.

---

## 📑 Table of Contents

- [📌 Project Overview](#-project-overview)
- [⚙️ Prerequisites](#️-prerequisites)
- [📦 Installation](#-installation)
- [🔐 Configuration & Environment Variables](#-configuration--environment-variables)
- [🗄️ Database Setup](#️-database-setup)
- [🚀 Running the Project Locally](#-running-the-project-locally)
- [📂 Project Structure](#-project-structure)
- [🐞 Troubleshooting](#-troubleshooting)
- [🌐 Deployment](#-deployment)
- [⭐ Support](#-support)

---

## 📌 Project Overview

**HeliHive™** is a full-stack web application that enables:

- 🎟️ Digital event registration  
- 📸 Automated ID/pass generation with QR codes  
- 🔐 Secure QR-based verification  
- 🧑‍💼 Admin dashboard for monitoring registrations  

The system replaces traditional manual entry with a scalable and efficient digital workflow.

---

## ⚙️ Prerequisites

Ensure the following tools are installed on your system:

### 🖥️ System Requirements
- Node.js **v18+**
- npm **v9+**
- MongoDB (Local or Atlas)
- Git

### 🔍 Verify Installation

```bash
node -v
npm -v
git --version
````

> Tip: Use NVM (Node Version Manager) to manage Node.js versions easily.

---

## 📦 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Dhairya012-P/event-registration-system.git
cd event-registration-system
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`.

---

## 🔐 Configuration & Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

> ⚠️ Do NOT commit `.env` to GitHub.

---

## 🗄️ Database Setup

### 🔹 Option 1: Local MongoDB

1. Install MongoDB locally
2. Start MongoDB server:

```bash
mongod
```

3. Use this connection string:

```env
MONGO_URI=mongodb://127.0.0.1:27017/eventDB
```

---

### 🔹 Option 2: MongoDB Atlas (Recommended)

1. Go to MongoDB Atlas
2. Create a cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventDB
```

---

## 🚀 Running the Project Locally

Start the backend server:

```bash
npm start
```

Expected output:

```bash
Server running on port 3000
```

---

### 🌐 Access the Application

Open in browser:

```
http://localhost:3000
```

> Tip: If frontend is static HTML, open files directly or use Live Server in VS Code.

---

## 📂 Project Structure

```
event-registration-system/
│── public/              # Frontend files (HTML, CSS, JS)
│── image/               # Event background templates
│── routes/              # API routes
│── models/              # Database schemas
│── controllers/         # Business logic
│── config/              # Configuration files
│── migration-scripts/   # Cloud migration tools
│── server.js            # Entry point
│── package.json         # Dependencies & scripts
│── .env                 # Environment variables
│── README.md            # Documentation
```

---

## 🐞 Troubleshooting

### ❌ Port Already in Use

Error:

```bash
EADDRINUSE
```

Fix:

```bash
npx kill-port 3000
```

---

### ❌ MongoDB Connection Error

Error:

```bash
MongoNetworkError
```

Fix:

* Ensure MongoDB is running
* Verify connection string
* Check internet (for Atlas)

---

### ❌ node_modules Issues

Fix:

```bash
rm -rf node_modules
npm install
```

---

### ❌ Environment Variables Not Working

Fix:

* Ensure `.env` exists
* Add in `server.js`:

```js
require('dotenv').config();
```

---

### ❌ API Not Working from Frontend

Fix:

* Replace `localhost` with deployed URL
* Enable CORS:

```js
const cors = require('cors');
app.use(cors());
```

---

## 🌐 Deployment

### 🚀 Deploy Backend on Render

1. Push code to GitHub
2. Go to Render
3. Create a new Web Service
4. Connect your repository

---

### ⚙️ Render Configuration

**Build Command:**

```bash
npm install
```

**Start Command:**

```bash
npm start
```

---

### 🔐 Add Environment Variables

```
MONGO_URI=your_mongodb_connection_string
```

---

### 🌍 After Deployment

You’ll get a live URL like:

```
https://helihive.onrender.com
```

> Tip: Update frontend API URLs from `localhost` to deployed URL.

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub!

```
```
