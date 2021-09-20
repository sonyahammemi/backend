const mongoose = require('mongoose')
const User= require("./userModel")

const schemaCategorie = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    }


})


module.exports = mongoose.model('categorie',schemaCategorie)