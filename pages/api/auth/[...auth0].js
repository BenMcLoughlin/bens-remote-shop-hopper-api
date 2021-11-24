import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// export default handleAuth({
//     async login(req, res) {
//         await handleLogin(req, res, {
//             returnTo: 'https://bens-remote-shop-hopper-api.vercel.app/shopper/onboard'
//         });
//     }
// });
export default handleAuth();
