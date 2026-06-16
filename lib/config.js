const SENDMAIL_TRANSPORT = {
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
};

const SMTP_TRANSPORT = {
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  },
  secureConnection: 'false',
  tls: {
    ciphers: 'SSLv3',
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"TextBelt SMS" <abidulkabirabir.official@gmail.com>', // ✅ Updated to verified email
  },
  debugEnabled: false
};
