const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

//Admin Routes

router.post('/signup', (req, res) => {

});

router.post('/courses', adminMiddleware, (req, res) => {

});

router.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;