var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('main', {active: 'main'});
});

router.get('/tour', function(req, res, next) {
  res.render('tour', {active: 'tour'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {active: 'about'});
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

router.post('/contact', function(req, res, next) {
  console.log(req.body)

  const html = `<p>Nome: ${req.body.name}</p>
                <p>Telefone: ${req.body.telephone}</p>
                <p>Email:  ${req.body.email}</p>
                <p>Mensagem:  ${req.body.message}</p>`;

  const sgMail = require('@sendgrid/mail');
  const SENDGRID_API_KEY = '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';
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: 'willsg89@gmail.com;ruralroadsbanda@gmail.com',
    from: 'contato@ruralroadsband.com',
    subject: 'Novo contato através do site',
    html: html,
  };
  sgMail.send(msg);

  res.render('contact', {active: 'contact', sent: true});
});

module.exports = router;
