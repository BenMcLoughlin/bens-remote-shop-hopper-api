/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const fetchTags = async () => {
    const url = `/api/tags`;
    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    return data;
};

export default fetchTags;