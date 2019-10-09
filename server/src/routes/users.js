const express  = require('express');
const router = express.Router();

const mysqlConnection = require('../dbConnection');
const ajax = require('../services/ajaxCall')

router.get('/hello', (req, res) => {
  const defaultHello = {
    message: 'greet',
    data: 'hello'
  };

  ajax.getPokemons().then(resp => {
    console.log(resp.data);
    res.json(resp.data);

  });

});

router.get('/pokemon', (req, res) => {

});



module.exports = router;
