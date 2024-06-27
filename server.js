const express = require('express');
const bodyParser = require('body-parser');
const db = require('./connection'); 
const app = express();
const port = 3000;
const path = require('path');

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle user signup
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(query, [username, password, email], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server Error');
            return;
        }
        res.send('User registered successfully!');
    });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server Error');
            return;
        }
        if (results.length > 0) {
            res.send('Login successful!');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
