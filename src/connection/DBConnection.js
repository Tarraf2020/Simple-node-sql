
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:'3306',
  database:'BOB'
});

con.connect();


module.exports={con};