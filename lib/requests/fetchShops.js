/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const fetchShops = async () => {
    const url = `/api/shops`;
    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    return data.uniqueShops;
};

export default fetchShops;