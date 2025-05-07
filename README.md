# Medingen Product API - Full Stack

A full-stack application consisting of a **React frontend** for managing products with extended details like descriptions, salt content, and user reviews, and a **Flask API backend** with JWT authentication and MySQL database.

---
## ✨ Features

- ✅ Login screen with hardcoded admin (`username:admin`, `password:admin`)
## 🛠 Tech Stack

### Frontend (React):
- React
- Redux
- Axios

### Backend (Flask):
- Flask
- Flask-JWT-Extended
- Flask-SQLAlchemy
- MySQL

⚙️ Setup Instructions
## 1. Clone the repository
    ```bash
    https://github.com/RajalakshmiR24/medingen-rajalakshmi.git

## 2. Set up the client (React) frontend
    ```bash
    cd client
    npm install
## 3. 3. Set up the server (Flask) backend
    ```bash
    cd server
    python -m venv venv
    pip install -r requirements.txt
🚀 Running the App
## 1. Start the Flask API server:
    ```bash
    python server/run.py
Server will run at: `http://localhost:5000`

## 2. Start the React client:
    ```bash
    cd client
    npm start
React app will run at: `http://localhost:3000`





