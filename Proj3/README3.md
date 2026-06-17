# DecodeLabs – Project 3: Users CRUD API with MongoDB

A full CRUD REST API built with Node.js, Express.js, and MongoDB (via Mongoose) as part of the DecodeLabs internship program.

---

## 📁 Project Structure

```
project-3/
├── server.js        # Express server, Mongoose connection, schema & routes
└── package.json     # Project dependencies (see setup below)
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v14 or higher
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

### Installation & Run

```bash
npm init -y
npm install express mongoose
node server.js
```

Server starts at: `http://localhost:3000`  
Database: `mongodb://localhost:27017/project3`

---

## 📡 API Endpoints

### `POST /users` — Create a User

**Request Body**
```json
{ "name": "John Doe", "email": "john@example.com" }
```

**Response – 201 Created**
```json
{ "_id": "64abc...", "name": "John Doe", "email": "john@example.com", "__v": 0 }
```

**Response – 400 Bad Request**
```json
{ "message": "Name and email required." }
```

---

### `GET /users` — Get All Users

**Response – 200 OK**
```json
[
  { "_id": "64abc...", "name": "John Doe", "email": "john@example.com", "__v": 0 }
]
```

---

### `PUT /users/:id` — Update a User

**Request Body** *(any field to update)*
```json
{ "name": "Jane Doe" }
```

**Response – 200 OK** *(returns updated document)*
```json
{ "_id": "64abc...", "name": "Jane Doe", "email": "john@example.com", "__v": 0 }
```

**Response – 404 Not Found**
```json
{ "message": "User not found." }
```

---

### `DELETE /users/:id` — Delete a User

**Response – 200 OK**
```json
{ "message": "User deleted." }
```

**Response – 404 Not Found**
```json
{ "message": "User not found." }
```

---

## 🗂️ Mongoose Schema

```js
const User = mongoose.model("User", {
  name:  String,
  email: String,
});
```

Documents are stored in the `users` collection inside the `project3` database.

---

## 🛠️ Tech Stack

| Technology  | Usage                            |
|-------------|----------------------------------|
| Node.js     | JavaScript runtime               |
| Express.js  | HTTP server and routing          |
| MongoDB     | NoSQL database                   |
| Mongoose    | ODM — schema modeling & queries  |

---

## ✅ Validation Rules

| Field   | Rule                        |
|---------|-----------------------------|
| `name`  | Required, must not be empty |
| `email` | Required, must not be empty |

---

## 🧪 Testing with curl

```bash
# Create a user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'

# Get all users
curl http://localhost:3000/users

# Update a user
curl -X PUT http://localhost:3000/users/<id> \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe"}'

# Delete a user
curl -X DELETE http://localhost:3000/users/<id>
```

---

## ⚠️ Notes

- Data is **persisted in MongoDB** — unlike Project 2, data survives server restarts
- `findByIdAndUpdate` uses `{ new: true }` to return the updated document
- No email format validation is implemented in this version
- Error handling is present on `PUT` and `DELETE` routes; `POST` and `GET` do not yet have try/catch blocks

---

*Built as part of the [DecodeLabs](https://www.linkedin.com/company/decodelabs) internship – Backend Development Track.*
