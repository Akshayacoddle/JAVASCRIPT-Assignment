const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const signupControlles = require('../controllers/studentController');
const jsonParser = bodyParser.json();
router.use(jsonParser)



router.get("/", signupControlles.selectData);


router.post('/', signupControlles.createData);
//router.post('/login', signupControlles.createData);

module.exports = router;