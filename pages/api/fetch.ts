/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const url = 'https://www.healinghollow.com/products.json';
// const url = "https://www.funktional.ca/products.json";

const fetchProducts = () =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                // TODO: handle errors
                if (res.statusCode) {
                    const error = {
                        verbiage: res.message,
                        code: 'INTERNAL_ERROR',
                    };

                    if (Number(res.statusCode) === 404) {
                        error.verbiage = 'Request failed: request url was NOT_FOUND (404).';
                        error.code = 'NOT_FOUND';
                    }

                    reject(error);
                    return;
                }

                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });

        return true;
    });

const fetchStore = (url) =>
    new Promise((resolve, reject) => {
        if (!url) {
            url = 'https://www.healinghollow.com';
        }
        const readyUrl = `${url}/shop.json`;
        fetch(readyUrl, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
            // .then((res) => console.log('res:', res.request))
            // .then((res) => res.json())
            .then((res) => {
                // TODO: handle errors
                // if (res.statusCode) {
                //     const error = {
                //         verbiage: res.message,
                //         code: 'INTERNAL_ERROR',
                //     };

                //     if (Number(res.statusCode) === 404) {
                //         error.verbiage = 'Request failed: request url was NOT_FOUND (404).';
                //         error.code = 'NOT_FOUND';
                //     }

                //     reject(error);
                //     return;
                // }

                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });

        return true;
    });

export { fetchProducts, fetchStore };
