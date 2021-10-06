export const updateProducts = async (params) => {
    const res = await fetch('/api/updateProducts', {
        method: 'POST',
        body: JSON.stringify(params),
    });

    if (res) {
        const uploaded = await res.json();
        console.log(`SUCCESSFULLY UPDATED ${uploaded.result.productsUploaded} PRODUCTS`);

        return uploaded.result.productsUploaded;
    }
};