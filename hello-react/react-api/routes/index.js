var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express接口测试' });
});
router.get('/api/shop', function(req, res, next) {
  const data = require('./../data/shop')
  res.json(data);
});
module.exports = router;
