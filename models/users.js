'use strict'
var mysql = require('mysql');

class Users {
    constructor(pre_mysql){
        if( typeof pre_mysql == "undefined"){
            require('dotenv') .config({
				path : 'credentials.env' // XXX: Might use some form of relative path, so move this to the root of the models dir
			})
			return new Promise((resolve, reject)=> {
				try {
					this.mysqlConnection = mysql.createConnection({
						host : process.env.MYSQL_HOST,
						user : process.env.MYSQL_USER,
						password : process.env.MYSQL_PASSWORD,
						database : process.env.MYSQL_DATABASE
					})
					resolve( this )
                }
                catch(err){
                    reject(err);
                }
            })
        }else{
            return new Promise((resolve, reject) => {
                this.mysqlConnection = pre_mysql
                resolve(this)
            })
        }
    }

    find(userId){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM user where ID=?";
            try{
                this.mysqlConnection.query(query, [userId], function(error, results, fields){
                    if(error){
                        throw error;
                    }

                    resolve(results[0])
                })
            }
            catch(err){
                reject(err);
            }
        })
    }
}

module.exports = Users;