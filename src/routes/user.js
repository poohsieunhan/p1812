const user = require('../controllers/user');
const router = require('express').Router();
import verifyToken from '../middlewares/verify_token';

router.use(verifyToken)

router.get("/",user.getUser)
//router.get("/",user.addUser)

module.exports = router