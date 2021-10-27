import nodemailer from 'nodemailer';

export default async function (req, res) {
    let transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
            user:
                process.env.NODE_ENV === 'development'
                    ? process.env.MAILTRAP_USER
                    : process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASSWORD
        }
    });

    console.log('req.body: ', req.body);

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'test 2',
        text: 'reqbody',
        html: '<b>Hello world BANANAN</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}
