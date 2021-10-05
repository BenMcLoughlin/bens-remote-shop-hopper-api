export async function single(businessName, domain) {
    let productList = {};
    let arr = [];
    let iterator = 0;

    async function runFetch(newId) {
        console.log('newId:', newId)
        let url = `https://${domain}/products.json?limit=250&since_id=${0}`;
        let response = await fetch(url);
        let data = await response.json();
        iterator = data.products?.length - 1;

        await data.products?.map((product, i) => {
            if (i === iterator) {
                console.log('title:', product.title)
            }
        })

        console.log('data.products:', data.products[iterator]?.id, iterator)

        // todo
        // if (data.products?.length && newId !== data.products[iterator]?.id) {
        //     newId = data.products[iterator]?.id;
        //     // iterator += 30;
        //     // console.log('data.products.length:', data.products?.length, id, iterator);
        //     arr.push(data.products);
        //     runFetch(newId);
        // }

        return productList = { ...data, arr, businessName };
    }

    try {
    // for (let page = 1; page <= 12; page++) {
    //     // const url = `https://${domain}/products.json?limit=250&page=${page}`;
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     if (data.products.length === 0) continue;

    //     console.log('data:', data.length);

        //     productList = { ...data, businessName };
        // }
        // await runFetch(0, 6562195341495)
        await runFetch(0)
    } catch (error) {
        console.log(error);
    }
    console.log('IN SINGLE BUSINESS FUNCTION: ', productList.products?.length);
    return productList;
}
