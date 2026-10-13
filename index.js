import express from "express";
import prisma from "./lib/prisma.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ message: "GET request received" });
});

app.post("/users/create", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: Math.random().toString(36).substring(2, 15) + "@example.com",
      name: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15),
    },
  });

  res.status(201).json({ message: "User created successfully", user });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// 1:32:43
