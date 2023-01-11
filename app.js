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

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/84ac8765bb"

    const options = {
        method: "POST",
        auth: process.env.API_KEY
    }
    console.log(firstName, lastName, email);

    const request = https.request(url, options, (response) =>{
        response.on("data", (data) =>{
            console.log(JSON.parse(data));
        });
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    request.write(jsonData);
    request.end();
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
})


//changed to accommodate heroku or local port
app.listen(process.env.PORT || `${port}`, () => {
    console.log(`Server is running on port ${port}.`)
})