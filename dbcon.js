/**
 * Created by Clarence on 6/3/2017.
 * 
 * 
 */
 
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
  host              :  'mysql.eecs.oregonstate.edu', 
//   user            : 'cs340_sanjeevt',
//   password        : '2830',
//   database        : 'cs340_sanjeevt'
//  user            : 'cs290_pinec',
//  password        : '2779',
//  database        : 'cs290_pinec'
  
});


//citation https://community.c9.io/t/setting-up-phpmyadmin/1723:

var dbHost = process.env.IP || 'localhost',
    dbUser = process.env.C9_USER || 'root';

var pool = mysql.createConnection({
    host     : dbHost,
    user     : dbUser,
    password : '',
    database : 'c9',   // change if not on Cloud9
});



/*
pool.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});
*/
module.exports.pool = pool;

