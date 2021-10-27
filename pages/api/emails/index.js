// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';

export default async function (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    console.log('req.body: ', req.body);

    const msg = {
        to: 'benmcl@shaw.ca', // Change to your recipient
        from: 'benmcl@shaw.ca', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    };

    console.log('Hello from index');

    await sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
        })
        .catch((error) => {
            console.error(error);
        });
}
