const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lekgoabamahlaks:3qVghCILWC3ecoHS@cluster4.b2cuu14.mongodb.net/mernTutorial?retryWrites=true&w=majority&appName=Cluster4");

app.listen(3001, () => {
    console.log("sever running");
});