export async function products() {
  const { shopList, productList } = this

  const productsByBusiness = []

  let shortShopList = shopList.slice(0, 12)
  shortShopList.forEach(async ({ domain, businessName }) => {
    for (let page = 1; page <= 1; page++) {
      const url = `https://${domain}/products.json?limit=250&page=${page}`
      const response = await fetch(url)
      const data = await response.json()
      productsByBusiness.push({ ...data, businessName })
      // data.products.forEach((productInfo) => {
      //   allShopifyProducts.push({ shop: businessName, ...productInfo })
      // })
    }
  })

  this.productsByBusiness = productsByBusiness

  return this
}
