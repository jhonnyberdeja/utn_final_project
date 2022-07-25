/* module.exports = {
    mysql : {

    },
    mongo : {
        MONGO_URI: process.env.MONGO_URI
    },
    secretKey: process.env.SECRET_KEY || 'my_secret_key',
    saltRounds: parseInt(process.env.SALT_ROUNDS_BCRYPT || 10),
    CONNECTION_DATA : "mongo"
} */
module.exports = {
    secretKey: process.env.SECRET_KEY 
}