/* eslint-disable no-console */
const sendProducts = async (body) => {
    const res = await fetch('/api/hydrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log('SEND PRODUCTS RESPONSE:', data);

    return data;
};

export default sendProducts;