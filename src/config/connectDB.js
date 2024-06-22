const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'terangamain',
//     password: 'terangamain',
//     database: 'terangamain',
// });
const connection = mysql.createPool({
    host: 'localhost',
    user: 'terangamain',
    password: 'terangamain',
    database: 'bgdsamm',
});
export default connection;


