const express = require("express");
const cors = require('cors')
const app = express();

const webRouter = require("../routes/web");
const apiRouter = require("../routes/api");

app.use(cors())
app.use(express.json()); // -> req.body -> POST
app.use(express.urlencoded({extended:true}));  // -> req.query -> GET


app.use("/api/v1",apiRouter);
app.use("/",webRouter);


module.exports = app;
