const express = require('express')
const bodyparser= require('body-parser')
const userrouter = require('./routes/userRouter')
const customerrouter=require('./routes/customerRouter')
const providerrouter=require('./routes/providerRouter')
const productrouter = require('./routes/productRouter')
const categorierouter=require('./routes/categorieRouter')
const orderrouter=require('./routes/orderrouter')
const subcategorie=require('./routes/subcategorieRouter')
const app = express() //app middelware  contient toutes les fonctionalité et les méthodes qui offre express

//swagger

const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');


//appel base de donnée 
const db = require('./config/database')

//verfier path

app.use(function(err, req, res, next) {
    console.log(err);
    if (err.status === 404)
        res.status(404).json({ message: "Path Not found " });
    else
        res.status(500).json({ message: "Something looks wrong !!" + err })
});


//parse application/json//pour accepter tous type de fichier(xml....)
app.use(bodyparser.json());
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));
app.set('secretKey', "apibackend") //clé privé de chiffrement (authenticate)




app.use('/user', userrouter)
app.use('/customer',customerrouter)
app.use('/provider',providerrouter)
app.use('/product', productrouter)
app.use('/categorie', categorierouter)
app.use('/order', orderrouter)
app.use('/subcategorie',subcategorie)


var swaggerOptions= {
    swaggerDefinition:{
        info:{
            servers: ['http://localhost:3001']
        },
        //tags sont les collections
        tags:[{
            name:'user', 
            description:'this tag is for the user services'
        },
            { name:'customer',
            description:'this tag is for the customer services'
        },
        { name:'provider',
            description:'this tag is for the provider services'
        },
        { name:'categorie',
            description:'this tag is for the categorie services'
        },
        { name:'order',
            description:'this tag is for the order services'
        },
        { name:'subcategorie',
            description:'this tag is for the subcategorie services'
        },
        { name:'product',
            description:'this tag is for the product services'
        },
    ]
    },
    apis: ['server.js',"./routes/*.js"]   

};
var swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/doc',swaggerUi.serve,swaggerUi.setup(swaggerDocs))



app.listen(3001,(err)=>{

    if(err)
        console.log('erreur de connexion',err)
    
    else console.log('serveur is running 3001')
})




