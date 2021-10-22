/**
 * @param token
 */
function setToken(token) {
    if (typeof token === 'string' && token.length > 0) {
        localStorage.setItem('token', token);
    }
}

/**
 * @returns {string | null}
 */
function getStoredAuthToken() {
    return localStorage.getItem('token') || null;
}

/**
 * @returns null
 */
function removeStoredAuthToken() {
    localStorage.removeItem('token');
}

/**
 * @param type
 */
function setUserType(type) {
    localStorage.setItem('ut', type);
}

/**
 * @returns {string | null}
 */
function getUserType() {
    return localStorage.getItem('ut') || null;
}

/**
 * @returns void
 */
function removeUserType() {
    return localStorage.removeItem('ut');
}

/**
 * @param {*} token
 */
function setPasswordWasReset(email) {
    if (typeof email === 'string' && email.length > 0) {
        localStorage.setItem('pw-reset', email);
    }
}

/**
 * @returns {string | null}
 */
function PasswordWasReset() {
    return localStorage.getItem('pw-reset') || null;
}

/**
 *
 */
function removePasswordWasReset() {
    localStorage.removeItem('pw-reset');
}

export {
    setToken,
    getStoredAuthToken,
    removeStoredAuthToken,
    setUserType,
    getUserType,
    removeUserType,
    setPasswordWasReset,
    PasswordWasReset,
    removePasswordWasReset
};