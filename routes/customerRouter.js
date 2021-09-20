const customercontroller = require('../controllers/customerController')

const router = require('express').Router()

//methode create customer

/**
 * @swagger
 * post:
 * /customer/add:
 *  post:
 *    description: add customer
 *    tags:
 *    - customer
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: body
 *         in : body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *                  address:
 *                    type: string
 *                    required: true
 *                  city: 
 *                    type: string
 *                    required: true
 *                  name:
 *                    type: string
 *                    required: true
 *                  lname: 
 *                    type: string
 *                    required: true
 *                  phone:
 *                    type: string
 *                    required: true
 *                  password:
 *                    type: string
 *                    required: true
 *                  email:
 *                    type: string
 *                    required: true
 *    responses:
 *      '201':
 *        description: customer add
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
 *                  address:
 *                    type: string
 *                  city: 
 *                    type: string
 *                  name: 
 *                    type: string
 *                  lname: 
 *                     type: string
 *                  email: 
 *                     type: string
 *                  password:
 *                     type: string
 *                  phone: 
 *                     type: number
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

router.post('/add',customercontroller.CreateCustomer)

/**
 * @swagger
 * get:
 * /customer/list:
 *  get:
 *    description: list customer
 *    tags:
 *    - customer
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    responses:
 *      '200':
 *        description: list customer 
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
 *                  address:
 *                    type: string
 *                  city: 
 *                    type: string
 *                  name:
 *                    type: string
 *                  lname: 
 *                    type: string
 *                  phone:
 *                    type: number
 *                  password:
 *                    type: string
 *                  email:
 *                    type: string
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


router.get('/list',customercontroller.GetAllCustomer)

/**
 * @swagger
 * get:
 * /customer/getone/{_id}:
 *  get:
 *    description: getone customer
 *    tags:
 *    - customer
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: _id
 *         in : path
 *         required: true
 *    responses:
 *      '200':
 *        description: customer getone
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
 *                  address:
 *                    type: string
 *                  city: 
 *                    type: string
 *                  name:
 *                    type: string
 *                  lname: 
 *                    type: string
 *                  phone:
 *                    type: number
 *                  password:
 *                    type: string
 *                  email:
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


router.get('/getone/:id',customercontroller.GetCustomerById)

/**
 * @swagger
 * put:
 * /customer/update/{_id}:
 *  put:
 *    description: update customer
 *    tags:
 *    - customer
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: _id
 *         in : path
 *         required: true
 *       - name: body
 *         in : body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *                  address: 
 *                    type:string
 *                  city: 
 *                    type:string
 *                  name:
 *                    type: string
 *                  lname: 
 *                    type: string
 *                  phone:
 *                    type: string
 *                  password:
 *                    type: string
 *                  email:
 *                    type: string
 *    responses:
 *      '200':
 *        description: customer update
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
 *                  address: 
 *                    type: string
 *                  city: 
 *                    type:string
 *                  name:
 *                    type: string
 *                  lname: 
 *                    type: string
 *                  phone:
 *                    type: number
 *                  password:
 *                    type: string
 *                  email:
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

router.put('/update/:id',customercontroller.customerupdate)

/**
 * @swagger
 * delete:
 * /customer/delete/{_id}:
 *  delete:
 *    description: delete customer
 *    tags:
 *    - customer
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    parameters:
 *       - name: _id
 *         in : path
 *         required: true
 *    responses:
 *      '200':
 *        description: customer deleted
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

router.delete('/delete/:id',customercontroller.customerdelete)



module.exports=router