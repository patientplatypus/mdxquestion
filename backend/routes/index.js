var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/content1', function(req, res, next) {
  res.json({content: '# Hello There Content 1'})
});

router.get('/content2', function(req, res, next) {
  res.json({content: '# Hello There Content 2'})
});

module.exports = router;
