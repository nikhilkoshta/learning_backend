const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const z = require("zod");

const app = express();

const schema = z.object({
    username: z.email(),
    password: z.string().min(8)
})

const ALL_USERS = [
    {
        username: "nikhilkoshta2@gmail.com",
        password: "123",
        name: "Nikhil Koshta"
    },
    {
        username: "mayankpandey@gmail.com",
        password: "1234",
        name: "Mayank Pandey"
    },
    {
        username: "shravaniramchandre@gmail.com",
        password: "12344",
        name: "Shravani Ramchandre"
    }
];

app.use(express.json());

function userExists(username, password) {
    return ALL_USERS.find(user => user.username === username && user.password === password) !== undefined;
}


// function userExists(username, password) {
//     //some logic here
//     let userExists = false;
//     for (let i = 0; i < ALL_USERS.length; i++) {
//         if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
//             userExists = true;
//         }
//     }

//     return userExists;
// }



// function authMiddleware(req, res, next) {
//     const username = z.safeParse(username)
// }

app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User does not exist in our memory db",
        });
    }

    var token = jwt.sign({  username: username }, jwtPassword);
    return res.json({
        token
    })
})

app.get('/', function(req, res) {
    res.send("Hello world");
})



app.get('/users', function(req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        //return a list of users other than this user    
        res.status(200).json({
            users: ALL_USERS.filter(function(value) {
                if (value.username == username) {
                    return false
                } else {
                    return true;
                }
            })
        })
            
        
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
})

app.listen(3000);