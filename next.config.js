/* eslint-disable require-await */
/* eslint-disable no-undef */
const environment = process.env.NODE_ENV;
let apiRequestUrl = '';

switch (environment) {
    case 'preview':
        apiRequestUrl = 'https://shop-hopper-dev.vercel.app';
        break;
    case 'production':
        apiRequestUrl = 'https://shophopper.ca';
        break;
    default:
        apiRequestUrl = 'http://localhost:3000';
        break;
}

module.exports = {
    env: {
        API_URL: apiRequestUrl // todo

    },
    async headers() {
        if (environment === "future todo") {
            return {

                /* development only config options here */
            };
        }

        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
                    }
                ]
            }
        ];
    }
};
