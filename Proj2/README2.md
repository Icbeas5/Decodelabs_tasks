# DecodeLabs – Project 2: Users REST API

A simple in-memory REST API built with Node.js and Express.js as part of the DecodeLabs internship program.

---

## 📁 Project Structure

```
project-2/
├── server.js        # Express server with route handlers
└── package.json     # Project dependencies (see setup below)
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v14 or higher
- npm

### Installation & Run

```bash
npm init -y
npm install express
node server.js
```

Server starts at: `http://localhost:3000`

---

## 📡 API Endpoints

### `GET /users`
Returns all registered users.

**Response – 200 OK**
```json
{
  "success": true,
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" }
  ]
}
```

---

### `POST /users`
Creates a new user.

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response – 201 Created**
```json
{
  "success": true,
  "message": "User Created Successfully.",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response – 400 Bad Request** *(missing fields)*
```json
{
  "success": false,
  "message": "Name and email are required."
}
```

**Response – 400 Bad Request** *(invalid email)*
```json
{
  "success": false,
  "message": "Please enter a valid email."
}
```

---

## ✅ Validation Rules

| Field   | Rule                        |
|---------|-----------------------------|
| `name`  | Required, must not be empty |
| `email` | Required, must contain `@`  |

---

## 🛠️ Tech Stack

| Technology | Usage                      |
|------------|----------------------------|
| Node.js    | JavaScript runtime         |
| Express.js | HTTP server and routing    |

---

## ⚠️ Notes

- User data is stored **in-memory** (the `users` array) — all data is lost when the server restarts
- IDs are auto-incremented based on array length (`users.length + 1`)
- No database or authentication is implemented in this version

---

## 🧪 Testing with curl

```bash
# Get all users
curl http://localhost:3000/users

# Create a user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

---

*Built as part of the [DecodeLabs](https://www.linkedin.com/company/decodelabs) internship – Backend Development Track.*
