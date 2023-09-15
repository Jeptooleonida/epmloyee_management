const mysql = require('mysql2');


const db = mysql.createConnection({
    host: '192.168.30.52', // set port of the database connection
    user: 'root', // set username of the user using the database
    port: 3306,  // set port it can also be ommitted 
    password: 'example', // set password of the user using the database
    database: 'employee_management' // database name
}).promise();

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the employee management database.');
});

module.exports = db;
