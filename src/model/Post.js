const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    Texto: {
        type: String,
        required: true
    },
    Likes:{
        type: Number,
        required: true
    }, 
},
{
    timestamps: true
});

module.exports = mongoose.model("Post", Post);