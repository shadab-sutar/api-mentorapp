const express = require("express");
const mongoose = require("mongoose");
const config = require('./config');

app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect(encodeURI(config.dbPath), { useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB Instance...");
});

db.on("error", () => {
    console.log("Error connecting to MongoDB Instance...");
});

require("./api/routes")(app);

app.listen(config.port, () => {
    console.log("App running on port: " + config.port);
});