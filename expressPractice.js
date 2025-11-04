const express = require("express");

const app = express();

app.get('/health-checkup', function(req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "Nikhil" && password != "pass") {
        res.status(403).json({
            msg: "User Not Found"
        });

        return;
    }

    if (kidneyId != 1 || kidneyId != 2) {
        res.status(403).json({
            msg: "Wrong Inputs"
        });

        return;
    }
})

app.listen(3000);