const Subcategorie = require('../models/subcategorieModel')
module.exports ={
    Create :function(req,res){
        const newsubcategorie = new Subcategorie
        ({
        
            name:req.body.name,
            product:req.body.product,
            
        })
        newsubcategorie.save((err,subcategorie)=>{
            if(err)
            res.status(500).json({
                message:err,
                status:500
            })
            else
            res.status(201).json({
                message:'subcategorie added',
                status:201,
                data:subcategorie
            })
        
        })
        
        
        },

        //getallcategorie -list
        GetAllSubcategorie:function(req,res){
        
            Subcategorie.find({}).exec((err,listsubcategorie)=>{
        
                if(err)
                res.status(500).json({
                    message:err,
                    status:500
                })
                else
                res.status(200).json({
                    message:' find list',
                    status:201,
                    data:listsubcategorie
                })
        
        
            })
        
        
        },
        //getbyid
        
        GetSubategorieById:function(req,res){
        
            Categorier.findById({_id:req.params.id}).exec((err,subcategorier)=>{
                if(err)
                res.status(500).json({
                    message:err,
                    status:500
                })
                else
                res.status(200).json({
                    message:' find subcategorie',
                    status:200,
                    data:categorie
                })
            })
        },
        
        //update
        
        update:function(req,res){
            subcategorieModel.updateOne({_id:req.params.id},req.body).exec((err,Subategorie)=>
            {
                if(err)
                res.status(500).json({
                    message:err,
                    status:500,    
                })
                else
                res.status(200).json({
                    message:'subcategorier update',
                    status:200,
                    data:subcategorie
                })
            }
        
            )},
            //delete
        
        delete:function(req,res){
            subcategorieModel.deleteOne({_id:req.params.id},req.body).exec((err,Subategorier)=>
            {
                if(err)
                res.status(500).json({
                    message:err,
                    status:500,
                })
                else
                res.status(200).json({
                    message:'subcategorier delete',
                    status:200,
                    data:subcategorie
                })
            })
        
        }
        
        
        
        
        
        }
        
    
