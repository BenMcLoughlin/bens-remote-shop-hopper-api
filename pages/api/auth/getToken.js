/* eslint-disable prefer-arrow-callback */
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function getToken(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res, {
            scopes: ['read:getToken']
        });
        const response = await fetch(`api/auth/getToken`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const shows = await response.json();

        res.status(200).json(shows);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
});
