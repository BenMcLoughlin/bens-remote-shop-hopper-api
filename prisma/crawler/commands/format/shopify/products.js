export function products() {
  const { productsByBusiness } = this;

  const productList = [];

  productsByBusiness.forEach(({ products, businessName }) => {
    products.forEach((product) => productList.push({
      businessName,
      ...product,
    }));
    console.log('productList:', productList);
  });

  this.productList = productList;
}
