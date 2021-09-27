export async function single(businessName, domain) {
    let productList = {};
    try {
        for (let page = 1; page <= 12; page++) {
            const url = `https://${domain}/products.json?limit=250&page=${page}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.products.length === 0) continue;

            productList = { ...data, businessName };
        }
    } catch (error) {
        console.log(error);
    }
    // console.log('IN SINGLE BUSINESS FUNCTION: ', productList.products[0]);
    return productList;
}
