const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    // Conexão com o MongoDB usando as credenciais fornecidas
    await mongoose.connect(uri);
    console.log("Conexão efetuada com sucesso!"); // Mensagem de sucesso após a conexão bem-sucedida
  } catch (error) {
    console.log("Ocorreu um erro ao realizar a conexão! Erro: ", error); // Mensagem de erro caso a conexão falhe
  }
};
module.exports = connectToDatabase; // Expor a função para ser utilizada em outros arquivos
