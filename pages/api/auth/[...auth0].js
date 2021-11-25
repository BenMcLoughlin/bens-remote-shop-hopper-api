import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

console.log('environment:', process.env.API_URL);

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            // See next.config.js
            returnTo: `${process.env.API_URL}/shopper/welcome`
        });
    }
});
