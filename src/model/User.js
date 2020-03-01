const mongoose = require('mongoose');

const User = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Pass:{
        type: String,
        required: true
    },
    Login:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Boxes:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Box"
    },
    Ativo:{
        type:String,
        required: true
    },
    ConfirmationKey:{
        type: String,
        required: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("User", User);