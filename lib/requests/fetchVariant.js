/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const fetchVariant = async (body) => {
    const url = `/api/variants`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log('VARIANT PRODUCTS RESPONSE:', data);

    return data;
};

export default fetchVariant;