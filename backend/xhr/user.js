import request from './request';

/**
 * @returns {Promise<any>}
 */
function get() {
    const options = {
        endpoint: '/user/data',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param body
 * @returns {Promise<any>}
 */
function login(body) {
    const options = {
        endpoint: '/auth/login',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param body
 * @returns {Promise<any>}
 */
function sendTempPassword(body) {
    const options = {
        endpoint: '/auth/sendTempPassword',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param body
 * @returns {Promise<any>}
 */
function sendSupportEmail(body) {
    const options = {
        endpoint: '/user/sendSupportEmail',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param body
 * @returns {Promise<any>}
 */
function updateUserSettings(body) {
    const options = {
        endpoint: '/user/settings',
        method: 'PUT',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param body
 * @returns {Promise<any>}
 */
function savePaymentDetails(body) {
    const options = {
        endpoint: '/user/payments',
        method: 'POST',
        body
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param password
 * @param existing
 * @returns {Promise<any>}
 */
function changePassword(password, existing) {
    const options = {
        endpoint: '/user/password',
        method: 'PUT',
        body: {
            existing,
            password
        }
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

/**
 * @param body
 * @returns {Promise<any>}
 */
function savePushToken(body) {
    const options = {
        endpoint: `/user/pushToken/${ body.token }`,
        method: 'POST',
        noJson: true
    };

    return new Promise((resolve, reject) => {
        request(options).then(resolve).catch(reject);
    });
}

export {
    get,
    login,
    sendTempPassword,
    sendSupportEmail,
    updateUserSettings,
    savePaymentDetails,
    changePassword,
    savePushToken
};