const express = require("express");
const request = require("request");
const https = require("node:https");

require('dotenv').config();

const app = express();

//Code to use instead of body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World!")
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})