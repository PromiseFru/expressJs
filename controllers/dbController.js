const mysql = require("mysql");

// create connection
function get_connection() {
	require('dotenv').config({
		path : 'credentials.env'
	})
	return new Promise((resolve, reject)=> {
		try {
			connection = mysql.createConnection({
				host : process.env.MYSQL_HOST,
				user : process.env.MYSQL_USER,
				password : process.env.MYSQL_PASSWORD,
				database : process.env.MYSQL_DATABASE
			})
			resolve( connection )
		}
		catch( error ) {
			reject( error ) 
		}
	})
}

module.exports = get_connection;