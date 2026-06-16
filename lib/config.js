const SMTP_TRANSPORT = {
  host: 'smtp.sendgrid.com',
  port: 587, // Use standard port
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  },
  secureConnection: 'false',
  tls: {
    ciphers: 'SSLv3',
  },
};
