export async function products() {
  const { shopList, productList } = this
  let shortShopList = shopList.slice(0, 2)

  const allShopifyProducts = []

  shortShopList.forEach(async ({ domain, businessName }) => {
    for (let page = 1; page <= 20; page++) {
      const url = `https://${domain}/products.json?limit=250&page=${page}`
      const response = await fetch(url)
      const data = await response.json()

      if (data.products.length === 0) break

      data.products.forEach((productInfo) => {
        allShopifyProducts.push({ shop: businessName, ...productInfo })
      })
    }
  })

  this.productList = [...productList, ...allShopifyProducts]

  // console.log("allShopifyProducts: ", allShopifyProducts)

  return this
}
 dev