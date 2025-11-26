const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

//Admin Routes

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    Course.create({
        title,
        description,
        price,
        imageLink
    })
});

router.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;