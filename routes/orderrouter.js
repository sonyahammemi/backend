const ordercontroller = require('../controllers/orderController')

const router = require('express').Router()
 

/**
 * @swagger
 * post:
 * /order/add:
 *  post:
 *    description: add order
 *    tags:
 *    - order
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
 *                  date:
 *                    type: string
 *                    required: true
 *                  price: 
 *                    type: number
 *                    required: true
 *    responses:
 *      '201':
 *        description: order add
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
 *                  date:
 *                    type: string
 *                  price: 
 *                    type: number
 *                  
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
router.post('/add',ordercontroller.CreateOrder)

/**
 * @swagger
 * get:
 * /order/list:
 *  get:
 *    description: list order
 *    tags:
 *    - order
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    responses:
 *      '200':
 *        description: list order 
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
 *                  date:
 *                    type: string
 *                  price: 
 *                    type: number
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


router.get('/list',ordercontroller.GetAllOrder)

/**
 * @swagger
 * get:
 * /order/getone/{_id}:
 *  get:
 *    description: getone order
 *    tags:
 *    - order
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
 *        description: order getone
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
 *                  date:
 *                    type: string
 *                  price: 
 *                    type: number
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


router.get('/getone/:id',ordercontroller.GetOrderById)

/**
 * @swagger
 * put:
 * /order/update/{_id}:
 *  put:
 *    description: update order
 *    tags:
 *    - order
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
 *                  date: 
 *                    type:string
 *                  price: 
 *                    type:number
 *    responses:
 *      '200':
 *        description: order update
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
 *                  date: 
 *                    type: string
 *                  price: 
 *                    type: number
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


router.put('/update/:id',ordercontroller.update)

/**
 * @swagger
 * delete:
 * /order/delete/{_id}:
 *  delete:
 *    description: delete order
 *    tags:
 *    - order
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
 *        description: order deleted
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


router.delete('/delete/:id',ordercontroller.delete)

module.exports=router