// import * as session from 'backend/utils/auth';

/**
 * @param req
 * @returns {Promise<any>}
 */
function request(req) {
    return new Promise((resolve, reject) => {
        if (!req.method) {
            console.error('method is required');
            reject(new Error('method is required'));
            return;
        }

        if (!req.endpoint) {
            console.error('endpoint is required');
            reject(new Error('endpoint is required'));
            return;
        }

        const endpoint = `${req.endpoint}`;
        let options = {
            method: req.method.toUpperCase(),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            }
        };

        if (options.method === 'OPTIONS') {
            options.headers = {
                ...options.headers,
                'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET'
            };
        }

        // options.headers = {
        //   Authorization: `Bearer ${ token }`,
        // };

        if (req.body) {
            if (req.noJson) {
                options.body = req.body;
            } else {
                if (options.headers) {
                    options.headers = {
                        ...options.headers,
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    };
                } else {
                    options.headers = {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    };
                }

                options.body = JSON.stringify(req.body);
            }
        }

        fetch(endpoint, options)
            .then((res) => res.json())
            .then((res) => {
                if (res.statusCode) {
                    const error = {
                        verbiage: res.message,
                        code: 'INTERNAL_ERROR'
                    };

                    if (Number(res.statusCode) === 404) {
                        error.verbiage = 'Request failed: request url was NOT_FOUND (404).';
                        error.code = 'NOT_FOUND';
                    }

                    reject(error);
                    return;
                }

                if (res.status === 'Fail') {
                    if (
                        ['INVALID_TOKEN', 'SESSION_EXPIRED', 'INVALID_USER', 'UNKNOWN_USER', 'NOT_FOUND'].indexOf(
                            res.code
                        ) > -1
                    ) {
                        //  await session.logout();
                    }

                    reject(res);
                } else {
                    resolve(res || 'Success');
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export default request;
