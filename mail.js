const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: '63be115883010656decc66222278a660-c322068c-99f0d7a9',
        domain: 'sandbox6ce2cc7ad09f4ffcb83e584338c40a8d.mailgun.org'
    }
};
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'jct7492@gmail.com',
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