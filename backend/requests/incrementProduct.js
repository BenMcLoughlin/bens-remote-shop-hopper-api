
const incrementProduct = async (body) => {
    const url = `/api/incrementProduct`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log(`SUCCESSFUL_INCREMENT, points for ${body}:`, data.result?.rating);

    return data;
};

export default incrementProduct;
