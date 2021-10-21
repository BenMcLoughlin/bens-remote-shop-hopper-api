const searchTags = async (body) => {
    const url = `/api/searchTags`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log(`SUCCESSFUL TAG SEARCH:`, data.result?.length);

    return data.result;
};

export default searchTags;