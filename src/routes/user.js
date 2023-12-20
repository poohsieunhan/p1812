const user = require('../controllers/user');
const router = require('express').Router();

router.get("/",user.getUser)
//router.get("/",user.addUser)

module.exports = router