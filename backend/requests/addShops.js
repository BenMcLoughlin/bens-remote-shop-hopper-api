
const search = async (body) => {
    const url = `/api/addShops`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log(`ADD NEW SHOP:`, data);

    if (data.code === 'P2002') {
        data.error = 'Cannot add Shop, it already exists in the database';
    }

    return data;
};

export default search;
