const express = require("express");
const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
    
})

app.post('/todo', (req, res) => {
    
})

app.put('/completed', (req, res) => {
    
})

app.delete('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Your app is listening at port ${PORT}`)
});