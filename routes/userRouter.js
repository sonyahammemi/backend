const usercontroller = require('../controllers/userController')
const router = require('express').Router()


//methode create user

/**
 * @swagger
 * post:
 * /user/add:
 *  post:
 *    description: add user
 *    tags:
 *    - user
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
 *                  name:
 *                    type: string
 *                    required: true
 *                  lname: 
 *                    type: string
 *                    required: true
 *                  phone:
 *                    type: number
 *                    required: true
 *                  password:
 *                    type: string
 *                    required: true
 *                  email:
 *                    type: string
 *                    required: true
 *    responses:
 *      '201':
 *        description: user add
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


router.post('/add', usercontroller.CreateUser)


/**
 * @swagger
 * get:
 * /user/list:
 *  get:
 *    description: add user
 *    tags:
 *    - user
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    responses:
 *      '200':
 *        description: list user 
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

router.get('/list',usercontroller.GetAllUser)

/**
 * @swagger
 * get:
 * /user/getone/{_id}:
 *  get:
 *    description: getone user
 *    tags:
 *    - user
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
 *        description: user getone
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


router.get('/getone/:id',usercontroller.GetUserById)

/**
 * @swagger
 * put:
 * /user/update/{_id}:
 *  put:
 *    description: update user
 *    tags:
 *    - user
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
 *        description: user update
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
router.put('/update/:id',usercontroller.userupdate)

/**
 * @swagger
 * delete:
 * /user/delete/{_id}:
 *  delete:
 *    description: delete user
 *    tags:
 *    - user
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
 *        description: user deleted
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
router.delete('/delete/:id',usercontroller.userdelete)



/**
 * @swagger
 * post:
 * /user/authenticate:
 *  post:
 *    description: authenticate user
 *    tags:
 *    - user
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
 *                  email:
 *                    type: string
 *                    required: true
 *                  password:
 *                    type: string
 *                    required: true
  *    responses:
 *      '200':
 *        description: user authenticate
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
 *                 user: 
 *                  type: object
 *                  properties:
 *                     name: 
 *                       type: string
 *                     lname: 
 *                       type: string
 *                     phone:
 *                       type: number
 *                     email:
 *                       type: string
 *                     password: 
 *                       type: string
 *                 token: 
 *                  type: string
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


router.post('/authenticate',usercontroller.authenticate)       

module.exports=router