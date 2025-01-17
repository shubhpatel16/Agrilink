// API
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Agrilink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "Success", user });
        } else {
          res.json({ message: "Incorrect Password" });
        }
      } else {
        res.json({ message: "Not Registered" });
      }
    })
    .catch(err => res.status(500).json({ error: "Server Error" }));
});

app.post("/register", async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  if (!name || !email || !phone || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  const newUser = new UserModel({ name, email, phone, password, role });
  newUser
    .save()
    .then(user => res.json({ message: "Registration successful", user }))
    .catch(err => res.status(500).json({ error: "Error saving user" }));
});

app.post("/profile", (req, res) => {
  const { email } = req.body;
  UserModel.findOne({ email })
    .then(user => {
      if (user) {
        res.json({ user });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch(err => res.status(500).json({ error: "Server Error" }));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
