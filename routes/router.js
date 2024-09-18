const express = require('express')
const userController = require('../controllers/userController')
const grievanceController = require("../controllers/grievanceController")
const jwtMiddleware = require('../middlewares/jwtMiddleware')


const router = new express.Router()

//register - http://localhost:3000/register
router.post('/register',userController.registerController)


//login - http://localhost:3000/login
router.post('/login',userController.loginController)


//add grievance
router.post('/grievance/add',grievanceController.addgrievanceController)


//get dashboardgrievance
router.get('/get-dashboard-grievance',grievanceController.getdashboardGrievance)

module.exports = router

