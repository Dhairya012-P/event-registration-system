# 🌐 HeliHive™ Event Registration & Digital Credentialing System

<div align="center">

**A full-stack MERN application designed to replace traditional paper-based event entry with a secure, real-time digital pass ecosystem.**

![Status](https://img.shields.io/badge/status-active-brightgreen) ![Node](https://img.shields.io/badge/Node.js-v18+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)

</div>

---

## 📑 Quick Navigation

| Section | Link |
|---------|------|
| Overview | [Project Overview](#-project-overview) |
| Setup | [Prerequisites](#️-prerequisites) |
| Installation | [Installation](#-installation) |
| Configuration | [Environment Variables](#-configuration--environment-variables) |
| Database | [Database Setup](#️-database-setup) |
| Running | [Running Locally](#-running-the-project-locally) |
| Structure | [Project Structure](#-project-structure) |
| Issues | [Troubleshooting](#-troubleshooting) |
| Deploy | [Deployment](#-deployment) |

---

## 📌 Project Overview

**HeliHive™** streamlines event management with modern digital solutions:

<table>
<tr>
<td>🎟️</td>
<td><strong>Digital Event Registration</strong> - Paperless registration system</td>
</tr>
<tr>
<td>📸</td>
<td><strong>Automated ID/Pass Generation</strong> - Instant QR code pass creation</td>
</tr>
<tr>
<td>🔐</td>
<td><strong>Secure QR Verification</strong> - Real-time entry validation</td>
</tr>
<tr>
<td>🧑‍💼</td>
<td><strong>Admin Dashboard</strong> - Live registration monitoring</td>
</tr>
</table>

**Result:** Replace manual entry workflows with a scalable, efficient digital ecosystem.

---

## ⚙️ Prerequisites

### System Requirements

Before you begin, ensure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | v18 or higher | JavaScript runtime |
| **npm** | v9 or higher | Package manager |
| **MongoDB** | Local or Atlas | Database |
| **Git** | Latest | Version control |

### ✅ Verify Your Setup

Run these commands in your terminal:

```bash
node -v      # Should show v18.x.x or higher
npm -v       # Should show v9.x.x or higher
git --version
```

> 💡 **Tip:** Use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to easily manage multiple Node.js versions.

---

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Dhairya012-P/event-registration-system.git
cd event-registration-system
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages from `package.json`.

---

## 🔐 Configuration & Environment Variables

### Create .env File

```bash
touch .env
```

### Add Configuration Variables

```env
# Server Configuration
PORT=3000

# Database Configuration
MONGO_URI=your_mongodb_connection_string_here
```

> ⚠️ **Security Warning:** Never commit `.env` to GitHub. Add it to `.gitignore`:
> ```
> .env
> .env.local
> .env.*.local
> ```

---

## 🗄️ Database Setup

### Option 1️⃣: Local MongoDB Installation

**Step 1:** Install MongoDB Community Edition  
Follow the official guide: [Install MongoDB](https://docs.mongodb.com/manual/installation/)

**Step 2:** Start MongoDB Server

```bash
mongod
```

**Step 3:** Configure Connection String

```env
MONGO_URI=mongodb://127.0.0.1:27017/eventDB
```

---

### Option 2️⃣: MongoDB Atlas (Cloud) - Recommended ☁️

MongoDB Atlas is a managed database service. Here's how to set it up:

1. **Create Account** → Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. **Create a Cluster**
   - Click "Create Cluster"
   - Choose your cloud provider and region
   - Wait for deployment (5-10 minutes)

3. **Create Database User**
   - Navigate to "Database Access"
   - Click "Add New Database User"
   - Set username and password securely

4. **Whitelist Your IP**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Add your IP (or use 0.0.0.0/0 for development)

5. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy your connection string

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventDB?retryWrites=true&w=majority
```

> 📌 Replace `username`, `password`, and `cluster` with your actual values.

---

## 🚀 Running the Project Locally

### Start the Development Server

```bash
npm start
```

### Expected Output

```
Server running on port 3000
Connected to MongoDB
```

### Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

> 💡 **For Frontend:** If using static HTML files, you can:
> - Open files directly in browser, or
> - Use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code

---

## 📂 Project Structure

```
event-registration-system/
│
├── 📁 public/              # Frontend static files
│   ├── index.html
│   ├── css/
│   └── js/
│
├── 📁 routes/              # API route handlers
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   └── registrationRoutes.js
│
├── 📁 models/              # MongoDB schemas
│   ├── User.js
│   ├── Event.js
│   └── Registration.js
│
├── 📁 controllers/         # Business logic
│   ├── authController.js
│   ├── eventController.js
│   └── registrationController.js
│
├── 📁 config/              # Configuration files
│   └── database.js
│
├── 📁 migration-scripts/   # Cloud migration utilities
│   └── migrateToGCP.js
│
├── 📁 image/               # Event templates & assets
│   └── backgrounds/
│
├── 📄 server.js            # Application entry point
├── 📄 package.json         # Dependencies & scripts
├── 📄 .env                 # Environment variables (gitignored)
├── 📄 .gitignore
└── 📄 README.md            # This file
```

---

## 🐞 Troubleshooting

### ❌ Port 3000 Already in Use

**Error:**
```
EADDRINUSE: address already in use :::3000
```

**Solution:**

```bash
npx kill-port 3000
```

Or specify a different port:
```env
PORT=5000
```

---

### ❌ MongoDB Connection Error

**Error:**
```
MongoNetworkError: failed to connect to server
```

**Solutions:**

- **Local MongoDB:** Ensure `mongod` is running
  ```bash
  mongod
  ```

- **Atlas:** Verify these in order:
  - ✓ Connection string is correct
  - ✓ Username and password are accurate
  - ✓ IP address is whitelisted
  - ✓ Internet connection is stable

- **Test Connection:**
  ```bash
  npm test
  ```

---

### ❌ node_modules Corruption

**Error:**
```
Error: Cannot find module 'express'
```

**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### ❌ Environment Variables Not Loading

**Error:**
```
MONGO_URI is undefined
```

**Solutions:**

1. Verify `.env` file exists in root directory
2. Ensure `server.js` loads dotenv at the top:

```js
require('dotenv').config();
```

3. Restart the server after changing `.env`

---

### ❌ CORS Errors (API Calls Failing)

**Error:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**

Enable CORS in `server.js`:

```js
const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS
app.use(cors());

// Alternative: Allow specific origin
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

## 🌐 Deployment

### Deploy Backend on Render (Recommended)

Render provides free hosting with easy deployment from GitHub.

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Authorize Render to access your repositories

### Step 3: Create Web Service

1. Click "New +" → "Web Service"
2. Select your repository
3. Configure settings:

| Setting | Value |
|---------|-------|
| **Name** | helihive |
| **Environment** | Node |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

### Step 4: Add Environment Variables

In Render dashboard:

1. Go to "Environment"
2. Add:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventDB
   ```

### Step 5: Deploy

Click "Create Web Service" and wait for deployment (2-5 minutes).

### After Deployment

You'll receive a live URL:

```
https://helihive.onrender.com
```

**Update Frontend API Calls:**

Replace all `localhost` references with your Render URL:

```js
// Before
fetch('http://localhost:3000/api/register')

// After
fetch('https://helihive.onrender.com/api/register')
```

---

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Render Deployment Docs](https://render.com/docs)

---

## ⭐ Show Your Support

If HeliHive™ helped you, please consider giving it a star on GitHub! 🌟

```
⭐ https://github.com/Dhairya012-P/event-registration-system
```

---

<div align="center">

**Made with ❤️ for seamless event management**

[Report Bug](https://github.com/Dhairya012-P/event-registration-system/issues) • [Request Feature](https://github.com/Dhairya012-P/event-registration-system/issues)

</div>
