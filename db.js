var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "profiles",
  user: "root",
  password: ""
});

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + con.threadId);
  });
module.exports = con;   