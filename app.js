const express = require("express");
const request = require("request");
const https = require("node:https");

require('dotenv').config();

const app = express();

//for serving static images, css files, and js files
app.use(express.static("public"));

//Code to use instead of body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const port = 3000;

app.post('/', (req, res) =>{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    console.log(firstName, lastName, email);
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})