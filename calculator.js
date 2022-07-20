//jshint esversion:6
// express module and body-parser

const express = require("express");             //Express module
const bodyParser = require("body-parser")       //npm body-parser module
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//home page callback function for simple addition  
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

//BMI Calculator page callback function 
app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

// Simple Addition 
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2);
    var addResult = num1 + num2;
    res.send("Your calculated value is:" + addResult);
});

// BMI calculation BMI = weight / height^2 (kg/cm^2 or kg/m^2)
app.post("/bmiCalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / height*height;
    res.send("Your BMI value is: " + bmi);
});

// creating server port 3000
app.listen(3000, function () {
    console.log("Server Start on port 3000")
});
