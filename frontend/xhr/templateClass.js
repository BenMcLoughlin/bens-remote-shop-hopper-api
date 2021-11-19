import request from './request';

function applyProductToTemplate(body) {
    const options = {
        endpoint: '/api/applyProductToTemplate',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function getTemplateClasses() {
    const options = {
        endpoint: '/api/getTemplateClasses',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

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

function toggleTemplateClassSet(body) {
    const options = {
        endpoint: '/api/toggleTemplateClassSet',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    applyProductToTemplate,
    getTemplateClasses,
    getTemplateClass,
    checkTemplateClasses,
    resetTemplateClasses,
    toggleTemplateClassSet
};
