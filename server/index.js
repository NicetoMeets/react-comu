const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require("./Router/post.js"));

app.listen(port, () => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://kim:ghfkddl73!@cluster0.g70ao0l.mongodb.net/Community?retryWrites=true&w=majority')
        .then(() => {
            console.log(`Example app listening at http://localhost:${port}`)
            console.log("Connecting MongoDB..")
        })
        .catch((err) => {
            console.log(`${err}`)
        })
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});