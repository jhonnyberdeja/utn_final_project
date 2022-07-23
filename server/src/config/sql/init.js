
const sequelize = require("./connection")
require("../../models");

const initConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection with mysql has been established successfully.');
        await sequelize.sync();
        console.log("All models were synchronized successfully.");

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = initConnection;