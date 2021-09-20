const mongoose = require('mongoose')
//lheritage:eviter le gaspillage de la memoire
//1ere appl user
const User= require("./userModel")
const schemaProvider = new mongoose.Schema({

company:{
    type:String,
    required:true,
    trim:true
},
matricule:{
    type:Number,
    required:true,
    trim:true
},
service:{
    type:String,
    required:true,
    trim:true
}
})

module.exports=User.discriminator('provider',schemaProvider)
