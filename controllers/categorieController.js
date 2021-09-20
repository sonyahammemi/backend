const Categorie = require('../models/categorieModel')

module.exports={
    Create:function(req,res){

        const newcategorie = new Categorie({
        
            title:req.body.title,
            description:req.body.description,
            
        })
        newcategorie.save((err,categorie)=>{
            if(err)
            res.status(500).json({
                message:err,
                status:500
            })
            else
            res.status(201).json({
                message:'categorie added',
                status:201,
                data:categorie
            })
        
        })
        
        
        },
        
        //getallcategorie -list
        GetAllCategorie:function(req,res){
        
            Categorie.find({}).exec((err,listcategorie)=>{
        
                if(err)
                res.status(500).json({
                    message:err,
                    status:500
                })
                else
                res.status(200).json({
                    message:' find list',
                    status:201,
                    data:listcategorie
                })
        
        
            })
        
        
        },
        
        //getbyid
        
        GetCategorieById:function(req,res){
        
            Categorier.findById({_id:req.params.id}).exec((err,categorier)=>{
                if(err)
                res.status(500).json({
                    message:err,
                    status:500
                })
                else
                res.status(200).json({
                    message:' find categorie',
                    status:200,
                    data:categorie
                })
            })
        },
        
        //update
        
        update:function(req,res){
            categorieModel.updateOne({_id:req.params.id},req.body).exec((err,Categorie)=>
            {
                if(err)
                res.status(500).json({
                    message:err,
                    status:500,    
                })
                else
                res.status(200).json({
                    message:'categorier update',
                    status:200,
                    data:categorie
                })
            }
        
            )},
        
        //delete
        
        delete:function(req,res){
            categorieModel.deleteOne({_id:req.params.id},req.body).exec((err,Categorier)=>
            {
                if(err)
                res.status(500).json({
                    message:err,
                    status:500,
                })
                else
                res.status(200).json({
                    message:'categorier delete',
                    status:200,
                    data:categorie
                })
            })
        
        }
        
        
        
        
        
        }