import request from './request';

function shopStatuses() {
    const options = {
        endpoint: `/api/shopStatus`,
        method: 'GET'
        // headers: { 'Content-Type': 'application/json' } // todo
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

function updateMetrics(isShopify, header) {
    const options = {
        endpoint: `/api/metrics`,
        method: 'POST',
        body: JSON.stringify(isShopify ? 'all' : header)
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    shopStatuses,
    updateMetrics
};
