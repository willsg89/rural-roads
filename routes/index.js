const express = require('express');
const router = express.Router();
const i18n = require("i18n");

router.get('/lang', function(req, res, next) {
  res.cookie('ruralroads-site-lang', req.query.lang);
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  res.render('main', {active: 'main', language: getLang(req)});
});

router.get('/about', function(req, res, next) {
  res.render('about', {active: 'about', language: getLang(req)});
});

router.get('/tour', function(req, res, next) {
  res.render('tour', {active: 'tour', language: getLang(req)});
});

router.get('/photos', function(req, res, next) {
  res.render('photos', {active: 'photos', language: getLang(req)});
});

router.get('/videos', function(req, res, next) {
  res.render('videos', {active: 'videos', language: getLang(req)});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {active: 'contact', language: getLang(req)});
});

function getLang(req) {
  return i18n.getLocale(req)
}

router.post('/contact', function(req, res, next) {
  const sendGrid = require('../services/sendGrid')
  sendGrid.sendContact(req.body);

  res.render('contact', {active: 'contact', sent: true});
});

module.exports = router;
