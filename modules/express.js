const express = require("express");

const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`\nResquest type: ${req.method}`);
  console.log(`Resquest type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  console.log(req.body);
  next();
});

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200);
  res.send("<h1> Helo word </h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await UserModel.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const users = await UserModel.create(req.body);

    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findByIdAndDelete(id);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log(
    `Start serve with Espress in port ${port}! - http://localhost:${port}`
  )
);
