const environment = process.env.REACT_APP_ENVIRONMENT;
let apiRequestUrl = 'http://localhost:3000';

switch (environment) {
case 'staging':
    apiRequestUrl = 'https://shop-hopper-api.vercel.app';
    break;
case 'production':
    apiRequestUrl = 'https://shophopper.ca';
    break;
default:
    apiRequestUrl = 'http://localhost:3000';
    break;
}

export default apiRequestUrl;