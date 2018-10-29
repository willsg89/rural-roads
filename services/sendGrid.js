const sgMail = require('@sendgrid/mail');

function sendContact(body) {

  const html = `<p>Nome: ${body.name}</p>
                <p>Telefone: ${body.telephone}</p>
                <p>Email:  ${body.email}</p>
                <p>Mensagem:  ${body.message}</p>`;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('sendContact:: ', body);
  console.log(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.MAILS_TO,
    from: 'contato@ruralroadsband.com',
    subject: 'Novo contato através do site',
    html: html,
  };
  sgMail.send(msg);
}

module.exports = {
    sendContact: sendContact
  };