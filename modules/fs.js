const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Pasta criada com sucesso!");
});

fs.writeFile(
  path.join(__dirname, "/test", "test.text"),
  "Hello node",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

//Adicionar à um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.text"),
  "Hello word!",
  (error) => {
    if (error) {
      return console.log("error:", error);
    }
    console.log("Arquivo modificado com sucesso!");
  }
);

// Ler aruquivo

fs.readFile(
  path.join(__dirname, "/test", "test.text"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Error:", error);
    }
    console.log(data);
  }
);
