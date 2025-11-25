
//Middleware for handling auth
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
    //Implement admin auth logic
    //You need to check the headers and validate admin from the admin DB.
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.findOne({
        username: username,
        password: password
    });

    if (admin) {
        next();
    } else {
        res.status(403).json({
            msg: "Admin doesn't exist"
        })
    }
}

module.exports = adminMiddleware;