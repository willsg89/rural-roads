var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('main', {active: 'main'});
});

router.get('/tour', function(req, res, next) {
  res.render('tour', {active: 'tour'});
});

router.get('/photos', function(req, res, next) {
  res.render('photos', {active: 'photos'});
});

router.get('/videos', function(req, res, next) {
  res.render('videos', {active: 'videos'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {active: 'contact'});
});

module.exports = router;
