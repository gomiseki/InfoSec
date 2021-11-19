// get the client
const mysql = require('mysql2');

// Create the connection pool. 
const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


module.exports = function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(!err) {
      let promiseConn = conn.promise();
      callback(promiseConn);
    }
    else{
      console.log(err);
    }
    conn.release();
  });
}