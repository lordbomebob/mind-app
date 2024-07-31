const router = require('express').Router();
let User = require('../models/user.model');
const userController = require(`../controller/user.controller`)
router.get(`/`,userController.getUser)

//signup
router.post('/register',userController.RegisterUser )
//login api
router.post('/login',userController.loginUser)

module.exports = router;