// importing database and connection
const Sequelize = require('sequelize');
const connection = require("./connection");

//creating table in data base
const tbclientes = connection.define('clientes', {
    //column names
    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    rg: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cpf: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    dataNasc: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endereço: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    complemento: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    cidade: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    bairro: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    uf: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cep: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    telefone: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    senha: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    repetirSenha: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//synchronizes with database and does not force a new creation 
tbclientes.sync({ force: false }).then(() => {});
module.exports = tbclientes;