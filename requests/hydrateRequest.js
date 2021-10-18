
const hydrateRequest = async (body) => {
    const res = await fetch('/api/hydrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log('HYDRATE PRODUCTS RESPONSE:', data);

    return data;
};

export default hydrateRequest;