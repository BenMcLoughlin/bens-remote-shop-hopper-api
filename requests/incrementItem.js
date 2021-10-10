/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const incrementItem = async (body) => {
    const url = `/api/incrementItem`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log(`SUCCESSFUL INCREMENT, points for ${ body }:`, data.result.value);

    return data;
};

export default incrementItem;