
// Create connection

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wine_index'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});