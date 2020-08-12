const mysql = require("mysql");
const config = require('../config/default.json');

// create connection
function get_connection(){
    return new Promise((resolve, reject) => {
        try{
            var connection = mysql.createConnection(config.dbConfig);

            resolve(connection);
        }catch(err){
            console.error(err);
            reject(err)
        }
    })
}

module.exports = get_connection;