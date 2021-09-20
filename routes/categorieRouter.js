const categoriecontroller = require('../controllers/categorieController')

const router = require('express').Router()
 

/**
 * @swagger
 * post:
 * /categorie/add:
 *  post:
 *    description: add categorie
 *    tags:
 *    - categorie
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
 *                  title:
 *                    type: string
 *                    required: true
 *                  description: 
 *                    type: string
 *                    required: true
 *    responses:
 *      '201':
 *        description: categorie add
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
 *                  title:
 *                    type: string
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
router.post('/add',categoriecontroller.Create)

/**
 * @swagger
 * get:
 * /categorie/list:
 *  get:
 *    description: list categorie
 *    tags:
 *    - categorie
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    responses:
 *      '200':
 *        description: list categorie 
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
 *                  title:
 *                    type: string
 *                  description: 
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

router.get('/list',categoriecontroller.GetAllCategorie)

/**
 * @swagger
 * get:
 * /categorie/getone/{_id}:
 *  get:
 *    description: getone categorie
 *    tags:
 *    - categorie
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
 *        description: categorie getone
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
 *                  title:
 *                    type: string
 *                  description: 
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


router.get('/getone/:id',categoriecontroller.GetCategorieById)

/**
 * @swagger
 * put:
 * /categorie/update/{_id}:
 *  put:
 *    description: update categorie
 *    tags:
 *    - categorie
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
 *        description: categorie update
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
 *                  title: 
 *                    type: string
 *                  description: 
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



router.put('/update/:id',categoriecontroller.update)

/**
 * @swagger
 * delete:
 * /categorie/delete/{_id}:
 *  delete:
 *    description: delete categorie
 *    tags:
 *    - categorie
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
 *        description: categorie deleted
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


router.delete('/delete/:id',categoriecontroller.delete)



module.exports=router