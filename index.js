// Importação do módulo express
const express = require("express");

// Intancia do módulo express
const app = express();

// Configuração para o express manipular JSON
app.use(express.json());

// Configuração para o express trabalhar com dados de formulário
app.use(express.urlencoded({extended:true}));

// TESTE DE CONEXÃO
const connection = require("./database/database")
console.log(connection);

// IMPORTAÇÃO DA CONTROLLER DE CATEGORIA
const categoriaController = require("./controller/categoriaController");
app.use("/", categoriaController);

// IMPORTAÇÃO DA CONTROLLER DE PRODUTO
const produtoController = require("./controller/produtoController");
app.use("/", produtoController);

// CRIAÇÃO DO SERVIDOR WEB DE REQUISIÇÕES E RESPOSTAS
app.listen(3000, ()=>{
    console.log('RODANDO EM: http://localhost:3000')
});