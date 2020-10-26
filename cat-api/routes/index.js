var express = require('express');
var router = express.Router();
var request = require('request');

const cats = [
  {
    url: 'https://cdn2.thecatapi.com/images/e8t.jpg',
    id: 'e8t'
  },
  {
    url: 'https://cdn2.thecatapi.com/images/af8.jpg',
    id: 'af8'
  },
  {
    url: 'https://cdn2.thecatapi.com/images/oKIJfbCRy.jpg',
    id: 'oKIJfbCRy'
  },
  {
    url: 'https://cdn2.thecatapi.com/images/a5a.jpg',
    id: 'a5a'
  },
  {
    url: 'https://cdn2.thecatapi.com/images/44l.jpg',
    id: '44l'
  },
  {
    url: 'https://cdn2.thecatapi.com/images/cfg.jpg',
    id: 'cfg'
  },
  {
    url: 'https://cdn2.thecatapi.com/images/68s.jpg',
    id: '68s' 
  }, 
  {
    url: 'https://cdn2.thecatapi.com/images/7gs.jpg',
    id: '7gs' 
  }, 
  {
    url: 'https://cdn2.thecatapi.com/images/a6l.jpg',
    id: 'a61'
  }, 
  {
    url: 'https://cdn2.thecatapi.com/images/EzYYrmFp7.jpg',
    id: 'EzYYrmFp7'
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  randomNum = Math.floor(Math.random() * cats.length);
  let response = cats[randomNum];
  res.json(response);
});

module.exports = router;
