const sgMail = require('@sendgrid/mail');

export default function sendEmail(req, res) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const { template } = req.body;

    const templates = {
        welcome: 'd-00d17fffd3384a21993f53cb4b10d561',
        forgotPassword: 'd-b7e3ddf421e94191a6f488e0a4cdd0a2',
        weeklyDeals: 'd-00d17fffd3384a21993f53cb4b10d561'
    };

    const msg = {
        to: 'benmcl@shaw.ca',
        from: 'dev@shophopper.ca',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        templateId: templates[template],
        dynamic_template_data: {
            businessName: 'shophopper',
            product: 'shoes',
            price: '1 million!!!'
        }
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
        })
        .catch((error) => {
            console.error(error);
        });

    res.send({ status: 'success' });
}
