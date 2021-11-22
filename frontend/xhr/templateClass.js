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

function checkTemplateClasses() {
    const options = {
        endpoint: '/api/checkTemplateClasses',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function resetTemplateClasses(body) {
    const options = {
        endpoint: '/api/resetTemplateClasses',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    getTemplateClass,
    checkTemplateClasses,
    resetTemplateClasses
};
