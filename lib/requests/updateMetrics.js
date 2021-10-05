export const updateMetrics = async (isShopify, header) => {
<<<<<<< HEAD
    const res = await fetch('/api/metrics', {
=======
    const res = await fetch('/api/dbMetrics', {
>>>>>>> 29f69a55049789ea3b0766a7378488c5bf06b6d9
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isShopify ? 'all' : header)
    });
    const data = await res.json();
    console.log(`GET NUMBER OF PRODUCTS:`, data);

    return data;
};