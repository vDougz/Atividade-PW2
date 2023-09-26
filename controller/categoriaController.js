const express = require("express");

const categoriaModel = require("../model/categoria");

const router = express.Router();

// ROTA DE INSERÇÃO DE CATEGORIA
router.post("/categoria/cadastrarCategoria", (req, res) => {
    res.send ("Categoria cadastrada com sucesso");
});

router.get("/categoria/listarCategoria",(req, res) => {
    res.send ("Categoria listada com sucesso");
});

router.put("/categoria/alterarCategoria", (req, res) => {
    res.send ("Categoria alterada com sucesso");
});

router.delete("/categoria/deletarCategoria",(req, res) => {
    res.send ("Categoria deletada com sucesso");
});


module.exports = router