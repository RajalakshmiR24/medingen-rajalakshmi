Here’s a complete `README.md` tailored for your **Flask + MySQL product API** project, with JWT auth and relational models like `Product`, `Description`, `SaltContent`, and `Review`.

---

```markdown
# 🧠 Medingen Product API

A RESTful API built with Flask for managing products with extended details like description, salt content, and user reviews. Uses MySQL as the database and JWT for authentication.

---

## 📦 Features

- JWT-protected endpoints for secure access
- Create products with nested attributes
- View all products with full details
- Relational database structure using SQLAlchemy
- Modular Flask app using Blueprints and app factory pattern

---

## 🛠 Tech Stack

- **Backend**: Flask, Flask-JWT-Extended, SQLAlchemy
- **Database**: MySQL
- **ORM**: SQLAlchemy
- **Tools**: Postman/cURL for API testing

---

## 📁 Project Structure

```

app/
│
├── **init**.py        # Application factory
├── models.py          # SQLAlchemy models
├── routes/
│   └── product\_routes.py  # Product-related API endpoints
│
config.py              # Database and app config
init\_db.py             # One-time DB table creation
run.py                 # App entry point

````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/medingen-api.git
cd medingen-api
````

### 2. Set up virtual environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure your database

Edit `config.py` or your `.env` file:

```python
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://username:password@localhost/medingen_db'
```

Make sure MySQL server is running and the `medingen_db` database exists.

### 5. Initialize the database

```bash
python init_db.py
```

This creates all required tables: `product`, `description`, `salt_content`, `review`.

---

## 🚀 Running the App

```bash
python run.py
```

App runs at: `http://localhost:5000`

---

## 🔐 API Endpoints (JWT Protected)

### 🔸 GET /products

Returns full product details.

```bash
GET /products
Headers:
  Authorization: Bearer <your_token>
```

### 🔸 POST /products

Creates a new product with nested details.

```bash
POST /products
Headers:
  Authorization: Bearer <your_token>
Body (JSON):
{
  "name": "Heart-Healthy Bread",
  "description": "Low-sodium bread alternative.",
  "salt_content": 0.3,
  "reviews": ["Tastes great!", "Perfect for my diet."]
}
```

---

## 📬 Sample JSON Response

```json
[
  {
    "id": 1,
    "name": "Heart-Healthy Bread",
    "description": "Low-sodium bread alternative.",
    "salt_content": 0.3,
    "reviews": ["Tastes great!", "Perfect for my diet."]
  }
]
```

---

## 🧪 Testing

Use tools like:

* [Postman](https://www.postman.com/)
* `curl`
* `flask shell` for interactive DB inspection

---

## 🙋‍♀️ Author

**Raja Lakshmi R.** – Full Stack Developer
📍 Chennai, India
💼 Intern at WHY Global Services

---

## 📄 License

MIT License

```

---

Let me know if you'd like this in downloadable form, or if you're also using Swagger or Postman collection for documenting your API.
```
