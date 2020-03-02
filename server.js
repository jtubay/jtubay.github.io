const express = require('express');
const sendMail = require('./mail')
const path = require('path');
const app = express()
require('dotenv').config();



//data parsing
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body);
    sendMail(email, subject, text, function(err, data) {
        if(err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.json({ message: 'Email Sent!!!!' })
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
//static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
