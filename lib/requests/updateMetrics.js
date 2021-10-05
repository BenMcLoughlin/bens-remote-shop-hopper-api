export const updateMetrics = async (isShopify, header) => {
    const res = await fetch('/api/dbMetrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isShopify ? 'all' : header)
    });
    const data = await res.json();
    console.log(`GET NUMBER OF PRODUCTS:`, data);

    return data;
};