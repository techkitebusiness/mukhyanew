const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'terangamain',
    password: 'terangamain',
    database: 'terangamain',
});

export default connection;