const SENDMAIL_TRANSPORT = {
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
};

const SMTP_TRANSPORT = {
  host: 'smtp.sendgrid.net',
  port: 587, // Changed from 465 to 587
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  },
  secureConnection: 'false', // Must be 'false' for port 587
  tls: {
    ciphers: 'SSLv3',
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"TextBelt SMS" <abir.abidulkabir@gmail.com>',
  },
  debugEnabled: false
};
