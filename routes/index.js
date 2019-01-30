var express = require('express');
var router = express.Router();

router.get('/lang', function(req, res, next) {
  res.cookie('ruralroads-site-lang', req.query.lang);
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  res.render('main', {active: 'main'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {active: 'about'});
});

// router.get('/tour', function(req, res, next) {
//   res.render('tour', {active: 'tour'});
// });

// router.get('/about', function(req, res, next) {
//   res.render('about', {active: 'about'});
// });

// router.get('/photos', function(req, res, next) {
//   res.render('photos', {active: 'photos'});
// });

// router.get('/videos', function(req, res, next) {
//   res.render('videos', {active: 'videos'});
// });

router.get('/contact', function(req, res, next) {
  res.render('contact', {active: 'contact'});
});

router.post('/contact', function(req, res, next) {

  const sendGrid = require('../services/sendGrid')
  sendGrid.sendContact(req.body);

  res.render('contact', {active: 'contact', sent: true});
});

module.exports = router;
