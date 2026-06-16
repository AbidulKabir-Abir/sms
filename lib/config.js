const SMTP_TRANSPORT = {
  host: 'smtp.sendgrid.net',
  port: 2525,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  },
  secureConnection: 'false',
  tls: {
    ciphers: 'SSLv3',
  },
};
