const subcategoriecontroller = require('../controllers/subcategorieController')

const router = require('express').Router()

/**
 * @swagger
 * post:
 * /subcategorie/add:
 *  post:
 *    description: add subcategorie
 *    tags:
 *    - subcategorie
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
 *                  product: 
 *                    type: string
 *                    required: true
 *    responses:
 *      '201':
 *        description: subcategorie add
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
 *                  product: 
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


router.post('/add',subcategoriecontroller.Create)

/**
 * @swagger
 * get:
 * /subcategorie/list:
 *  get:
 *    description: list subcategorie
 *    tags:
 *    - subcategorie
 *    consumes:
 *    - application/json
 *    produces:
 *    - application/json
 *    responses:
 *      '200':
 *        description: list subcategorie 
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
 *                  product: 
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

router.get('/list',subcategoriecontroller.GetAllSubcategorie)

/**
 * @swagger
 * get:
 * /subcategorie/getone/{_id}:
 *  get:
 *    description: getone subcategorie
 *    tags:
 *    - subcategorie
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
 *        description: subcategorie getone
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
 *                  product: 
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
router.get('/getone/:id',subcategoriecontroller.GetSubategorieById)

/**
 * @swagger
 * put:
 * /subcategorie/update/{_id}:
 *  put:
 *    description: update subcategorie
 *    tags:
 *    - subcategorie
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
 *                    type:string
 *                  product: 
 *                    type:string
 *    responses:
 *      '200':
 *        description: subcategorie update
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
 *                  product: 
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

router.put('/update/:id',subcategoriecontroller.update)

/**
 * @swagger
 * delete:
 * /subcategorie/delete/{_id}:
 *  delete:
 *    description: delete subcategorie
 *    tags:
 *    - subcategorie
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
 *        description: subcategorie deleted
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

router.delete('/delete/:id',subcategoriecontroller.delete)



module.exports=router