const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'jean.tubay.92@gmail.com',
        subject,
        text
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            cb(err, null)
        }else{
            cb(null, data)
        }
    });
}

module.exports = sendMail;