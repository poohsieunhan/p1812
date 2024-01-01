import * as controllers from "../controllers";
import express from 'express'

const router = express.Router();

router.post('/register',controllers.regiter);
router.post('/login',controllers.login);

module.exports = router