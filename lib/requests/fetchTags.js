/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const fetchTags = async () => {
    const url = `/api/tags`;
    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    console.log('All tags:', data);

    return data;
};

export default fetchTags;