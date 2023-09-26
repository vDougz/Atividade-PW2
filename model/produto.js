// IMPORTAÇÃO DO MÓDULO SEQUELIZE
const sequelize = require("sequelize");

// IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS
const connection = require("../database/database")

const produto = connection.define (
    'tbl_produto', 
    {
        codigo_produto:{
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },

        nome_produto:{
            type: sequelize.STRING(255),
            allowNull: false
        },

        valor_produto: {
            type: sequelize.DECIMAL(10,2),
            allowNull: false
        },

        imagem_produto: {
            type: sequelize.STRING(500),
            allowNull: false
        },

        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);

module.exports = produto