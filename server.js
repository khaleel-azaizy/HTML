const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'khaleel2001',
        database: 'destinations',
        port: 3306
    }
});

const app = express();

let initialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "home.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(initialPath, "register.html"));
});

app.post('/register-user', (req, res) => {
    const { username, email, password } = req.body;

    if (!username.length || !email.length || !password.length) {
        res.json('fill all the fields');
    } else {
        db("users").insert({
            username: username,
            email: email,
            password: password
        })
        .then(() => {
            return db.select("username", "email").from("users").where({email: email});
        })
        .then(data => {
            res.json(data[0]);
        })
        .catch(err => {
            console.error(err); // Log the error
            if (err.code === 'ER_DUP_ENTRY') {
                res.json('email already exists');
            } else {
                res.status(500).json('An error occurred');
            }
        });
    }
});

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('username', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if (data.length) {
            res.json(data[0]);
        } else {
            res.json('email or password is incorrect');
        }
    })
    .catch(err => {
        console.error(err); // Log the error
        res.status(500).json('An error occurred');
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000......');
});
