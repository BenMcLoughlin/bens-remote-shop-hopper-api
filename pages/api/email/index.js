import sgMail from '@sendgrid/mail';
import mockProducts from 'frontend/mock/products/emailProducts.json';

export default function sendEmail(req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const { template, sendTo, sendFrom } = req.body;
    console.log('req.body: ', req.body);
    const templates = {
        welcome: 'd-b703a0be17fc4189891b23cf33bb8b83',
        forgotPassword: 'd-b7e3ddf421e94191a6f488e0a4cdd0a2',
        productReccomendation: 'd-f202562ab3bc4f56b2a00cd2f551bdac',
        weeklyDeals: 'd-00d17fffd3384a21993f53cb4b10d561',
        newProducts: 'd-91988016eda14a19ad1b1c6944218d8b',
        contactUs: 'd-59ae8cc7f56d40f18904d6c3d746709e'
    };

    const msg = {
        to: sendTo,
        from: sendFrom || 'dev@shophopper.ca',
        templateId: templates[template],
        dynamic_template_data: req.body
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
