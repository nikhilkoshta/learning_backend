const express = require("express");
const { createTodo, updateTodo } = require("./types");
const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
    
})

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})

app.delete('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Your app is listening at port ${PORT}`)
});