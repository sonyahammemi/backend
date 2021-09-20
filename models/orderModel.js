const mongoose = require('mongoose')
const User= require("./userModel")

const schemaOrder = new mongoose.Schema(
    {
    date:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    }


})

module.exports = mongoose.model('order',schemaOrder)