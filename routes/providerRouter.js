const providerController = require("../controllers/providerController")

const router = require ('express').Router()

/**
 * @swagger
 * post:
 * /provider/add:
 *  post:
 *    description: add provider
 *    tags:
 *    - provider
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
 *                  company:
 *                    type: string
 *                    required: true
 *                  matricule: 
 *                    type: number
 *                    required: true
 *                  service: 
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
 *        description: provider add
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
 *                  company:
 *                    type: string
 *                  matricule: 
 *                    type: number
 *                  service: 
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

router.post('/add',providerController.CreateProvider)

/**
 * @swagger
 * get:
 * /provider/list:
 *  get:
 *    description: list provider
 *    tags:
 *    - provider
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    responses:
 *      '200':
 *        description: list provider 
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
 *                  company:
 *                    type: string
 *                  matricule: 
 *                    type: number
 *                  service: 
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

router.get('/list',providerController.GetAllProvider)

/**
 * @swagger
 * get:
 * /provider/getone/{_id}:
 *  get:
 *    description: getone provider
 *    tags:
 *    - provider
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
 *        description: provider getone
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
 *                  company:
 *                    type: string
 *                  matricule: 
 *                    type: number
 *                  service: 
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


router.get('/getone/:id',providerController.GetProviderById)

/**
 * @swagger
 * put:
 * /provider/update/{_id}:
 *  put:
 *    description: update provider
 *    tags:
 *    - provider
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
 *                  company: 
 *                    type:string
 *                  matricule: 
 *                    type:number
 *                  service: 
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
 *        description: provider update
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
 *                  company: 
 *                    type: string
 *                  matricule: 
 *                    type: number
 *                  service: 
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

router.put('/update/:id',providerController.Providerupdate)

/**
 * @swagger
 * delete:
 * /provider/delete/{_id}:
 *  delete:
 *    description: delete provider
 *    tags:
 *    - provider
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
 *        description: provider deleted
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

router.delete('/delete/:id',providerController.Providerdelete)
 

module.exports = router