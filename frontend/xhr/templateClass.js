import request from './request';

function getTemplateClass(body) {
    const options = {
        endpoint: '/api/getTemplateClass',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    getTemplateClass
};
