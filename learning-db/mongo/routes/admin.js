const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

//Admin Routes

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {

});

router.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;