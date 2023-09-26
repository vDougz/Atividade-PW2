// IMPORTAÇÃO DO MÓDULO SEQUELIZE
const sequelize = require("sequelize");

// IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS
const connection = require("../database/database")


const categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria:{
            type: sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,    
            primaryKey: true
        },

        nome_categoria:{
            type: sequelize.STRING(255),
            allowNull: false
        },

        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        }

    }
);

module.exports = categoria