import request from './request';

function shopStatuses() {
    const options = {
        endpoint: `/api/shopStatus`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    shopStatuses
};