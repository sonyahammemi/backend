const Order = require('../models/orderModel')

module.exports={


//createcustomer

CreateOrder:function(req,res){

const neworder = new Order({

    date:req.body.date,
    price:req.body.price,
    
})
neworder.save((err,order)=>{
    if(err)
    res.status(500).json({
        message:err,
        status:500
    })
    else
    res.status(201).json({
        message:'order added',
        status:201,
        data:order
    })

})


},

//getallcustomer -list
GetAllOrder:function(req,res){

    Order.find({}).exec((err,listorder)=>{

        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:' find list',
            status:201,
            data:listorder
        })


    })


},

//getbyid

GetOrderById:function(req,res){

    Order.findById({_id:req.params.id}).exec((err,order)=>{
        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:' find order',
            status:200,
            data:order
        })
    })
},

//update

update:function(req,res){
    orderModel.updateOne({_id:req.params.id},req.body).exec((err,Order)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,    
        })
        else
        res.status(200).json({
            message:'order update',
            status:200,
            data:order
        })
    }

    )},

//delete

delete:function(req,res){
    orderModel.deleteOne({_id:req.params.id},req.body).exec((err,Order)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,
        })
        else
        res.status(200).json({
            message:'order delete',
            status:200,
            data:order
        })
    })

}





}