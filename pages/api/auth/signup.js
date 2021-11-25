import { handleLogin } from '@auth0/nextjs-auth0';

export default async function signup(req, res) {
    try {
        await handleLogin(req, res, {
            // See next.config.js
            returnTo: `${process.env.API_URL}/shopper/onboard`,
            authorizationParams: {
                screen_hint: 'signup'
            }
        });
    } catch (error) {
        res.status(error.status || 400).end(error.message);
    }
}
