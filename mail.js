const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '5520622e5d465fe219c83b184bf7fd3e-c322068c-218f4fde',
        domain: 'sandboxfe9852f958df41168db9e8a5d212ea04.mailgun.org'
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