const express =require('express')
const controller =require('../controllers/courseController')
const router = express.Router()


router.post('/course',controller.createCourse)
router.get('/course',controller.getCourse)


module.exports = router