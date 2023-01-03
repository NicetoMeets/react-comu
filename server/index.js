const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname , "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");

app.listen(port, () => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://kim:ghfkddl73!@cluster0.g70ao0l.mongodb.net/Community?retryWrites=true&w=majority')
    .then(() => { 
        console.log(`Example app listening at http://localhost:${port}`)
        console.log("Connecting MongoDB..")
    })
    .catch((err)=> {console.log(`${err}`)
    })
});

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname , "../client/build/index.html"));
});

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname , "../client/build/index.html"));
});

app.post("/api/post/submit", (req, res) => {
    let temp = req.body;
    const ComunityPost = new Post(temp)
    ComunityPost.save()
    .then(()=>{
        res.status(200).json({ success: true })
    }).catch((err)=> {
        res.status(400).json({ success: false })
    });
});

app.post("/api/post/list", (req, res) => {
    Post.find().exec().then((doc) => {
        res.status(200).json({ success: true, postList : doc })
    }).catch((err)=> {
        res.status(400).json({ success: false })
    });
});