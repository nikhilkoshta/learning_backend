const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.json({
        msg: "User created successfully"
    })
})

router.get('/courses', async (req, res) => {
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses
    })
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    });

    res.json({
        msg: "Purchase complete!"
    })
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await UserfindOne({
        username: req.headers.username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
})

module.exports = router;