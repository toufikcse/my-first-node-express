const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome to web development mr. toufik')
})

const users = [
    {id: 0, name: 'Toufik', email: "toufik@gmail.com"},
    {id: 1, name: 'Mahmud', email: 'mahmud@gmail.com'},
    {id: 2, name: 'Raju', email: 'raju@gmail.com'},
    {id: 3, name: 'Yasin', email: 'yasin@gmail.com'},
    {id: 4, name: 'Rakib', email: 'rakib@gmail.com'}
]

app.get('/users', (req, res) => {
    console.log(req.query);
    const search = req.query.search;
    if(search) {
        const searchResult = users.filter( user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    res.send(users);
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the data', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log("listing to the port number", port);
})