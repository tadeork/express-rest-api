const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokedex_db',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Connected to the DB');
    }
});

module.exports = mysqlConnection;
