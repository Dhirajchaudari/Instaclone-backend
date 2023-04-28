const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    imageFile:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    dateAdded:{
        type:Date,
        default: Date.now
    }
})

module.exports = {Post:mongoose.model("instaPost", PostSchema)}