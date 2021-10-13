/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const search = async (body) => {
    const url = `/api/search`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log(`SUCCESSFUL SEARCH:`, JSON.stringify(data.result[3]));

    return data.result;
};

export default search;