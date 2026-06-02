const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/project3")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error:", err.message));

// Schema
const User = mongoose.model("User", {
  name: String,
  email: String,
});

// CREATE
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: "Name and email required." });
  const user = await User.create({ name, email });
  res.status(201).json(user);
});

// READ ALL
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found." });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found." });
    res.json({ message: "User deleted." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
});