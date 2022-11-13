const express = require('express');
const { connectDb } = require('./helpers/db');
const {PORT,HOST, db}   = require('./configuration/index');
const mongoose = require('mongoose');
const app     = express();

//db model
const postSchema = new mongoose.Schema({
    name:String,
})
const Post = mongoose.model("Post",postSchema);
//


const startServer = ()=>{
    app.listen(PORT,()=>{
        console.log(`api server has started on port ${PORT}`);
        console.log(`on host ${HOST}`);  
        console.log(`on db ${db}`); 
    })




    Post.find(function (err, posts) {
        if (err) return console.error(err);
        console.log("POSTS->",posts);
    })


    const silence = new Post({ name: 'Sound of Silence' });

    silence.save(function (err, silence) {
        if (err) return console.error(err);
        console.log(silence,"SAVED");
      });
    // console.log(silence.name);
}
app.get('/test',(req,res)=>{
    console.log(`WHAT ${PORT}`)
    res.send("CORRECT APISIS");
})


connectDb()
    .on("error",console.log)
    .on("disconnected",connectDb)
    .on("open",startServer);