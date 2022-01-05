import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secureConnection: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        ciphers: 'SSLv3'
    },
    logger: true,
    options: {
        from: "support@lirix.com",
        sender: "support@lirix.com",
        subject: "Lirix",
        encoding: "UTF-8",
    },
}) || global.transporter

if (!global.transporter) global.transporter = transporter

export default transporter