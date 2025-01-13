const http = require("http");

const port = 8080;

const serve = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1> Home page</>");
  }

  if (req.url == "/users") {
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

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

serve.listen(port, () => console.log(`Start port ${port}!`));
