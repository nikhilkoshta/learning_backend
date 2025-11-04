const express = require("express");
const z = require("zod");

// const schema = z.array(z.number());

/*
    email: string => email .com @nikhilkoshta
    password: string => atleast 8 letters
    country: "IN" or "US"

*/

const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number());
})

const app = express();

app.use(express.json());

app.post('/health-check', function(req, res) {
    const kidens = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
})

app.listen(3000);