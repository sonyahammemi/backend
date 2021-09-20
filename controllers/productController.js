const productModel = require('../models/productModel')
const multer = require ('multer')//package pour lapload d'un image
var fs= require("fs"); //permet de lire et ecrire un fichier 
//--dirname: donne la position
const upload = multer({dest:__dirname +'/uploads/'});

module.exports={
    
 //add   
    
    CreateProduct:function(req,res){
        var file = __dirname +'/uploads/'+req.file.originalname; //file name
        fs.readFile(req.file.path,function(err,data){
            fs.writeFile(file, data, function(err){
                if (err){
                    console.log(err);
                    var response={
                        msg:"sorry file could not be uploaded",
                        filename:req.file.originalname
                    }
                }
                else
                var newProduct=new productModel({
                    name:req.body.name,
                    price:req.body.price,
                    description:req.body.description,
                    image:req.file.originalname

                })
                newProduct.save(function(err,data)
                {
                    if (err){
                        res.json({state:"no",msg:"err"+err})
                    }
                    else{
                        res.json(data)
                    }
                })
        })
    })
}
,
//getall
GetAllProduct:function(req,res){            


    productModel.find({}).exec((err,listproducts)=>{

        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:'product find',
            status:200,
            data:listproducts
        })
    })
},

//getbyid

GetProductById:function(req,res){

    productModel.findById({_id:req.params.id}).exec((err,product)=>{
        if(err)
        res.status(500).json({
            message:err,
            status:500
        })
        else
        res.status(200).json({
            message:'product find by id',
            status:200,
            data:product
        })
    })

},

//update

Productupdate:function(req,res){
    productModel.updateOne({_id:req.params.id},{
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        image:req.file.originalname
    }).exec((err,Product)=>
    {
        if(err)
        res.status(500).json({
            message:err,
            status:500,    
        })
        else
        res.status(200).json({
            message:'Product update',
            status:200,
            data:Product
        })
    }

    )},
    
//delete
    Productdelete:function(req,res){
        productModel.deleteOne({_id:req.params.id},req.body).exec((err)=>
        {
        if (err)
        res.status(500).json({message:err,status:500}) 
        else
        res.status(200).json({message:"product deleted",status:"200"})
        })
    }

};

