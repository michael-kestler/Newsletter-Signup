const express = require("express");
const request = require("request");
const https = require("node:https");

require('dotenv').config();

const app = express();


const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World!")
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})