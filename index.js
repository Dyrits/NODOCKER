const express = require("express");
const mongoose = require("mongoose");
const { MONGO } = require("./config/config");

const app = express();

const uri = `mongodb://${MONGO.USER}:${MONGO.PASSWORD}@${MONGO.IP}:${MONGO.PORT}/${MONGO.AUTH_SOURCE}`;

const connect = (delay) => {
    console.log("Attempting to connect to MongoDB...");
    mongoose.connect(uri).then(
        () => { console.log("Connection to MongoDD has been established successfully."); },
        error => {
            console.error("An error occurred while connecting to MongoDB: ", error);
            setTimeout(connect, delay);
        }
    );
}

connect(5000);

app.get("/", (req, res) => {
    res.send("<h2>Hello NoDocker!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Listening on port ${port}.`); });
