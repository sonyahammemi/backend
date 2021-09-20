const mongoose = require('mongoose')
const bcrypt= require ('bcryptjs')

const schemaUser = new mongoose.Schema(   //const schemaUser=mongoose.model('user),new mongoose.schema

{

name:{
    type:String,
    required:true, //champ oblogatoire
    trim:true //pr les espaces
},
lname:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    validate :{
        validator : function validateEmail(v){
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                    return true
                } else {
                    return false
                }
                }
                }
},
password:{
    type:String,
    required:true,
    validate : {
            validator : function validatePassword(v) {
                if (/^[A-Za-z]\w{7,14}$/.test(v)) {              //de 7 a 14 caracteres
                        return true
                } else {
                    return false
                    }
                }
            }
},

phone:{
    type:Number,
    required:true,
    validate : {                                           //num de tel d 8 chiffres
        validator : function validatePhone (v){
            if (/^\d{8}$/.test(v)){
                return true
            }
            else {
                console.log("you are enterred invalid phone");
                return false
            }
        }
    }
    
}


});

schemaUser.pre("save",function(next){                 // cryptage password
    this.password=bcrypt.hashSync(this.password,10);    //hexdec hashage password
    next()
})


//local module de nodejs
module.exports = mongoose.model('User',schemaUser)   //module.export=schemaUser








