const mailgun = require("mailgun-js");

const mailgunApiKey = process.env.MAILGUN_API_KEY
const mailgunDomain = process.env.MAILGUN_DOMAIN

const mg = mailgun({ apiKey: mailgunApiKey, domain: mailgunDomain });

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'Bruce Wayne' + "'s desk" + '<Bruce@WayneEnterprises.com>',
        to: email,
        subject: 'Thanks for joining in!',
        text: '',
        html: `<h1> Welcome to our community ${name} . Let us know how you find the app </h1>`
    };

    mg.messages().send(data, function (error, body) {
        if (error) {
            return console.log('An error occured while sending mail. ')
        }
        console.log('Mail sent successfully.');
    });
}

const sendCancelEmail = (email, name) => {
    const data = {
        from: 'Bruce Wayne' + "'s desk" + '<Bruce@WayneEnterprises.com>',
        to: email,
        subject: 'Account Removed!',
        text: `Hi ${name} your account has been successfully removed`
    }
    mg.messages().send(data, function (error, body) {
        if (error) {
            return console.log('An error occured while sending mail. ')
        }
        console.log('Account Removed Mail sent successfully.');
    });
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

