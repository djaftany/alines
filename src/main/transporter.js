import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: 'smtp.aervel.tech	',
    port: 587,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
    logger: true,
    options: {
        from: "support@alines.com",
        sender: "support@alines.com",
        subject: "aLines",
        encoding: "UTF-8",
    },
}) || global.transporter

if (!global.transporter) global.transporter = transporter

export default transporter
