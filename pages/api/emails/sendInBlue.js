import blue from 'sib-api-v3-sdk';

export default async function () {
    blue.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY;

    let apiInstance = new blue.TransactionalEmailsApi();

    let templateId = 1;

    let sendTestEmail = new blue.SendTestEmail();

    sendTestEmail.emailTo = ['benmcl@shaw.ca'];

    apiInstance.sendTestTemplate(templateId, sendTestEmail).then(
        function () {
            console.log('API called successfully.');
        },
        function (error) {
            console.error(error);
        }
    );

    //     new blue.TransactionalEmailsApi()
    //         .sendTransacEmail({
    //             subject: 'Hello from the Node SDK!',
    //             sender: { email: 'api@sendinblue.com', name: 'Sendinblue' },
    //             replyTo: { email: 'api@sendinblue.com', name: 'Sendinblue' },
    //             to: [{ name: 'John Doe', email: 'benmcl@shaw.ca' }],
    //             htmlContent:
    //                 '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
    //             params: { bodyMessage: 'Made just for you!' }
    //         })
    //         .then(
    //             function (data) {
    //                 console.log(data);
    //             },
    //             function (error) {
    //                 console.error(error);
    //             }
    //         );

    console.log('Hello from blue');
}
