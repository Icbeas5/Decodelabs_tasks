const express = require("express");
const app = express();

app.use(express.json());

const users = [];

// GET 
app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        users: users,
    });
});

// POST
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    // Basic Validation
    if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required.",
    });
  }

    if (!email.includes("@")) {
    return res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
    });
    }

    // Save  user
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User Created Successfully.",
        user: newUser,
    });
});

// Starting the Server
app.listen(3000, () => {
    console.log("Listening to Port 3000");
});
