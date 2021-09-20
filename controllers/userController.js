const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")//c st un jeton permettant d'echanger des informations de maniere securise compose 3 parties
// header payload(contient des infos supplimentaires) et la signature
const bcrypt = require ("bcryptjs")



module.exports={

//createuser

CreateUser: function(req,res){

const newuser = new userModel({
    name:req.body.name,
    lname:req.body.lname,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone
})
//add
newuser.save((err,user)=>{

    if(err)
    res.status(500).json({
        message:err,
        status:500
    })
    else
    res.status(200).json({
        message:'user added',
        status:201,
        data:user
    })

})


},


//getalluser

GetAllUser:function(req,res){            //list


    userModel.find({}).exec((err,listusers)=>{

        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:'user find',
            status:200,
            data:listusers
        })
    })
},

//getuserbyid

GetUserById:function(req,res){

    userModel.findById({_id:req.params.id}).exec((err,user)=>{
        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:'user find by id',
            status:200,
            data:user
        })
    })

},
//update

userupdate:function(req,res){
    userModel.updateOne({_id:req.params.id},req.body).exec((err,User)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:'user updated',
            status:200,
            data:User
        })
    }
    )},

//delete

userdelete:function(req,res){
    userModel.deleteOne({_id:req.params.id},req.body).exec((err)=>
    {
    if (err)
    res.status(500).json({message:err,status:500}) 
    else
    res.status(200).json({message:"user deleted",status:"200"})
    })
},

authenticate:function(req,res) {
    userModel.findOne({email:req.body.email},
        function(err,userInfo){
            if(err){
                console.log(err)
            }
            else{
                if(bcrypt.compare(req.body.password,userInfo.password)){
                    const token = jwt.sign({id:userInfo._id},
                                            req.app.get("secretKey"),
                                            {expiresIn:"1h"}
                        )
                res.json({status:"succes",message:"userfound",
                    data:{user:userInfo,token:token}})
                }
            else{
                res.json({status:"error",message:"invalid email or password",data:null})
            }
            }
        })
        
}

}