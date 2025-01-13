const path = require("path");

console.log(path.basename(__filename));

// Nome do diretório do arquivo
console.log(path.dirname(__filename));

// Extens±ao do arquivo
console.log(path.extname(__filename));

// Extens±ao do arquivo
console.log(path.parse(__filename));

// Juntar caminho de arquivos
console.log(path.join(__dirname, "test", "test.html"));
