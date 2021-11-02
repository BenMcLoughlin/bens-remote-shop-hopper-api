const fetchShopStatus = async () => {
    const url = `/api/shopStatus`;
    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    return data.eachShop;
};

export default fetchShopStatus;
