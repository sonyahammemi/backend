const mongoose = require('mongoose')
// lheritage eviter le gaspillage de la memoire
// 1er etape: apll user
const User= require("./userModel")
//2eme etape:methode discriminator
//est une mecanisme d'heritage de schema
//c'est une fct model
const schemaCustomer = new mongoose.Schema(          //const schemaCustomer=User.discriminator('customer),new mongoose.schema
{
address:{
    type:String,
    required:true,
    trim:true
},
city:{
    type:String,
    required:true,
    trim:true
},
})


module.exports = User.discriminator('customer',schemaCustomer) //changer mongoose.model by user.discriminator //modele.exports=schemaCustomer

