const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200);
  res.send("<h1> Helo word </h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Jhon Doe",
      email: "jhon@done.com",
    },
    {
      name: "Jane Doe",
      email: "Jane@done.com",
    },
  ];
  res.status(200);
  res.json(users);
});

const port = 8080;

app.listen(port, () =>
  console.log(
    `Start serve with Espress in port ${port}! - http://localhost:${port}`
  )
);
