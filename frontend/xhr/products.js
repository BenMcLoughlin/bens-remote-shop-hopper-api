import request from './request';

function getGeneric(body) {
    const options = {
        endpoint: '/api/search',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function searchTwoParams(body) {
    const options = {
        endpoint: '/api/searchTwoParams',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function getHotItems(body) {
    const options = {
        endpoint: '/api/getHotItems',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function getColumn(body) {
    const options = {
        endpoint: '/api/getColumn',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export default wipeProducts;

function wipeProducts() {
    const options = {
        endpoint: '/api/wipeProducts',
        method: 'POST'
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    getGeneric,
    searchTwoParams,
    getHotItems,
    getColumn,
    wipeProducts
};
