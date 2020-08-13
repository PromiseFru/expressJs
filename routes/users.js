var express = require('express');
var router = express.Router();
var conn = require('../controllers/dbController');
var Users = require('../models/users');

var mysqlConnection;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res, next){
  res.send("You're so cool");
});

router.get('/:id', async function(req, res, next){
  try{
    const id = req.params.id;
    if(typeof mysqlConnection!="undefined"){
          mysqlConnection = await get_connection();
    }
    let users = await new Users(mysqlConnection)
    let user = await users.find(id);

    res.send(user);
  }catch(err){
    console.error(err);
  }
})

module.exports = router;
