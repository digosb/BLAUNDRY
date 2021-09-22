const Sequelize = require('sequelize');

const connection = new Sequelize('blaundry', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'

});

module.exports = connection;