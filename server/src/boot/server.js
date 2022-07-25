const express = require("express");
const cors = require('cors')
const cookieSession = require('cookie-session')
const app = express();

const webRouter = require("../routes/web");
const apiRouter = require("../routes/api");

app.use(cors())
app.use(express.urlencoded({extended:true}));  // -> req.query -> GET
app.use(express.json()); // -> req.body -> POST

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.use("/api/v1",apiRouter);
app.use("/",webRouter);


module.exports = app;
