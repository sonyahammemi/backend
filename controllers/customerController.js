const Customer = require('../models/customerModel')

module.exports={


//createcustomer

CreateCustomer:function(req,res){

const newcustomer = new Customer({

    address:req.body.address,
    city:req.body.city,
    name:req.body.name,
    lname:req.body.lname,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone
})
newcustomer.save((err,customer)=>{
    if(err)
    res.status(500).json({
        message:err,
        status:500
    })
    else
    res.status(201).json({
        message:'customer added',
        status:201,
        data:customer
    })

})


},

//getallcustomer -list
GetAllCustomer:function(req,res){

    Customer.find({}).exec((err,listcustomer)=>{

        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:' find list',
            status:201,
            data:listcustomer
        })


    })


},

//getbyid

GetCustomerById:function(req,res){

    Customer.findById({_id:req.params.id}).exec((err,customer)=>{
        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:' find customer',
            status:200,
            data:customer
        })
    })
},

//update

customerupdate:function(req,res){
    customerModel.updateOne({_id:req.params.id},req.body).exec((err,Customer)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,    
        })
        else
        res.status(200).json({
            message:'customer update',
            status:200,
            data:customer
        })
    }

    )},

//delete

customerdelete:function(req,res){
    customerModel.deleteOne({_id:req.params.id},req.body).exec((err,Customer)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,
        })
        else
        res.status(200).json({
            message:'customer delete',
            status:200,
            data:customer
        })
    })

}





}