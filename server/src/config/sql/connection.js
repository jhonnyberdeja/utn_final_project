const { Sequelize } = require('sequelize');

const { mysql } = require("../database");

const sequelize = new Sequelize(mysql.uri);

module.exports = sequelize;