const express = require("express");

const produtoModel = require("../model/produto");

const router = express.Router();

// ROTA DE INSERÇÃO DE PRODUTO
router.post("/produto/cadastrarProduto", (req, res) => {
    res.send ("Produto cadastrada com sucesso");
});

router.get("/produto/listarProduto",(req, res) => {
    res.send ("Produto listado com sucesso");
});

router.put("/produto/alterarProduto", (req, res) => {
    res.send ("Produto alterado com sucesso");
});

router.delete("/produto/deletarProduto",(req, res) => {
    res.send ("Produto deletado com sucesso");
});

module.exports = router