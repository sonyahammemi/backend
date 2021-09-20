const Provider = require('../models/providerModel')

module.exports={


//createprovider

CreateProvider:function(req,res){

const newprovider = new Provider({

    company:req.body.company,
    matricule:req.body.matricule,
    service:req.body.service,
    name:req.body.name,
    lname:req.body.lname,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone
})
newprovider.save((err,provider)=>{
    if(err)
    res.status(500).json({
        message:err,
        status:500
    })
    else
    res.status(200).json({
        message:'provider added',
        status:201,
        data:provider
    })

})
},

//GetAllProvider
GetAllProvider:function(req,res){

    Provider.find({}).exec((err,listprovider)=>{

        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:' find list',
            status:200,
            data:listprovider
        })
    })
},

//GetById

GetProviderById:function(req,res){
Provider.findById({_id:req.params.id}).exec((err,provider)=>{
    if(err)
    res.status(500).json({
        message:err,
        status:500
    })
    else
    res.status(200).json({
        message:' find provider',
        status:200,
        data:provider
    })
})
},



//update

Providerupdate:function(req,res){
    providerModel.updateOne({_id:req.params.id},req.body).exec((err,provider)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,    
        })
        else
        res.status(200).json({
            message:'provider update',
            status:200,
            data:provider
        })
    }

    )},

//delete

Providerdelete:function(req,res){
    providerModel.deleteOne({_id:req.params.id},req.body).exec((err,provider)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,
        })
        else
        res.status(200).json({
            message:'provider delete',
            status:200,
            data:provider
        })
    })

}
}