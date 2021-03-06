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

function searchProducts(body) {
    const options = {
        endpoint: '/api/searchProducts',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function searchProductById(body) {
    const options = {
        endpoint: '/api/searchProductById',
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
    searchProducts,
    searchProductById,
    getHotItems,
    getColumn,
    wipeProducts
};
