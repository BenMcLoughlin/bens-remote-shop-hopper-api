export const products = async (params) => {
    const res = await fetch('/api/load/products', {
        method: 'POST',
        body: JSON.stringify(params)
    });

    if (res) {
        const uploaded = await res.json();
        console.log(`SUCCESSFULLY UPDATED ${ uploaded.result } PRODUCTS`);

        return uploaded;
    }
};