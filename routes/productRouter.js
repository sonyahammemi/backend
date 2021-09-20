const productController = require('../controllers/productController')
const multer = require ('multer')
const upload = multer({dest:__dirname +'/uploads/'});

const router = require('express').Router()

/** 
 * @swagger
 * post:
 * /product/add:
 *  post:
 *    description: add a new  product
 *    tags:
 *    - product
 *    consumes:
 *    - multipart/form-data
 *    produces:
 *    - multipart/form-data
 *    parameters:
 *       - name: name
 *         in: formData
 *         description:  name of new  product
 *         required: true
 *         type: string
 *       - name: price
 *         in: formData
 *         description:  price of new  product
 *         required: true
 *         type: number
 *       - name: description
 *         in: formData
 *         description:  description of new  product
 *         required: true
 *         type: string
 *       - name: image
 *         in: formData
 *         description:  image of new  product
 *         required: true
 *         type: file
 *    responses:
 *      '201':
 *        description: new  product created
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *                type: object
 *                properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         price:
 *                           type: number
 *                         description:
 *                           type: string
 *                         image:
 *                           type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */


//upload image
router.post('/add',upload.single("image"),productController.CreateProduct) //single:seule image, any:plusieurs images add update


/**
 * @swagger
 * get:
 * /product/list:
 *  get:
 *    description: add product
 *    tags:
 *    - product
 *    consumes:
 *    - multipart/form-data
 *    produces:
 *    - multipart/form-data
 *    responses:
 *      '200':
 *        description: list product 
 *        schema:
 *          type: object
 *          properties:
 *             message: 
 *               type: string
 *             status: 
 *               type: number
 *             data:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  price: 
 *                    type: number
 *                  description:
 *                    type: string
 *                  image:
 *                    type: string
 *                  
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */



router.get('/list',productController.GetAllProduct)

/**
 * @swagger
 * get:
 * /product/getone/{id}:
 *  get:
 *    description: getone product
 *    tags:
 *    - product
 *    consumes:
 *    - multipart/form-data
 *    produces:
 *    - multipart/form-data
 *    parameters:
 *       - name: id
 *         in : path
 *         required: true
 *    responses:
 *      '200':
 *        description: product getone
 *        schema:
 *          type: object
 *          properties:
 *             message: 
 *               type: string
 *             status: 
 *               type: number
 *             data:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  price: 
 *                    type: number
 *                  description:
 *                    type: string
 *      '406':
 *        description: empty field
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */

router.get('/getone/:id',productController.GetProductById)





/** 
 * @swagger
 * put:
 * /product/update/{id}:
 *  put:
 *    description: update a   product
 *    tags:
 *    - product
 *    consumes:
 *    - multipart/form-data
 *    produces:
 *    - multipart/form-data
 *    parameters:
 *       - name: id
 *         in : path
 *         required: true
 *       - name: name
 *         in: formData
 *         description:  name of   product
 *         required: true
 *         type: string
 *       - name: price
 *         in: formData
 *         description:  price of   product
 *         required: true
 *         type: number
 *       - name: description
 *         in: formData
 *         description:  description of   product
 *         required: true
 *         type: string
 *       - name: image
 *         in: formData
 *         description:  image of   product
 *         required: true
 *         type: file
 *    responses:
 *      '201':
 *        description: new  product created
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *             data:
 *                type: object
 *                properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         price:
 *                           type: number
 *                         description:
 *                           type: string
 *                         image:
 *                           type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */


router.put('/update/:id',upload.single("image"),productController.Productupdate)


/**
 * @swagger
 * delete:
 * /product/delete/{id}:
 *  delete:
 *    description: delete product
 *    tags:
 *    - product
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: id
 *         in : path
 *         required: true
 *    responses:
 *      '200':
 *        description: product deleted
 *        schema:
 *          type: object
 *          properties:
 *             message: 
 *               type: string
 *             status: 
 *               type: number
 *      '406':
 *        description: empty field
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 *      '500':
 *        description: Internal Server Error
 *        schema:
 *          type: object
 *          properties:
 *             status:
 *               type : number
 *             message:
 *               type: string
 */

router.delete('/delete/:id',productController.Productdelete)

module.exports=router
