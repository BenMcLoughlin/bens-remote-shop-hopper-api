import request from './request';

function getGeneric(body) {
    const options = {
        endpoint: '/api/searchTwoParams',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function searchProducts(body) {
    const options = {
        endpoint: '/api/searchTwoParams',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    getGeneric,
    searchProducts
};