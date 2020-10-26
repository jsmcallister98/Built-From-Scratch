var express = require('express');
var router = express.Router();
var request = require('request');

const cats = ['https://cdn2.thecatapi.com/images/e8t.jpg', 'https://cdn2.thecatapi.com/images/af8.jpg', 'https://cdn2.thecatapi.com/images/oKIJfbCRy.jpg', 'https://cdn2.thecatapi.com/images/a5a.jpg', 'https://cdn2.thecatapi.com/images/44l.jpg', 'https://cdn2.thecatapi.com/images/cfg.jpg', 'https://cdn2.thecatapi.com/images/68s.jpg', 'https://cdn2.thecatapi.com/images/7gs.jpg', 'https://cdn2.thecatapi.com/images/a6l.jpg', 'https://cdn2.thecatapi.com/images/EzYYrmFp7.jpg']
/* GET home page. */
router.get('/', function(req, res, next) {
  randomNum = Math.floor(Math.random() * cats.length);
  console.log(randomNum);
  let response = { url: cats[randomNum] };
  res.json(response);
});

module.exports = router;
