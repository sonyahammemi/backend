const mongoose = require ('mongoose')
const user = require ('./userModel')

const schemaSubcategorie = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        trim:true
    },
    product:{
        type:String,
        required:true,
        trim:true
    }


})


module.exports = mongoose.model('Subcategorie',schemaSubcategorie)