//create model of post Document
const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({

    title:String,

    content:String,

    author:String
    
})

const Post = mongoose.model('Post',postSchema)

module.exports = Post;