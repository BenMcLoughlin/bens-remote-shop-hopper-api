const environment = process.env.NODE_ENV;
let apiRequestUrl = '';

console.log('NODE_ENV environment:', environment);

switch (environment) {
case 'staging':
    apiRequestUrl = 'https://shop-hopper-staging.vercel.app';
    break;
case 'production':
    apiRequestUrl = 'https://shophopper.ca';
    break;
default:
    apiRequestUrl = 'http://localhost:3000';
    break;
}

export default apiRequestUrl;
