const mysql = require('mysql2');

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khaleel2001', 
    database: 'destinations'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = db;
