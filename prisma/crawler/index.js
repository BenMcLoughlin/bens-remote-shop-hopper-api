import { connectScope } from "./utils/connectScope"
import * as commands from "./commands"

function Crawler() {
  this.connectScope = connectScope.bind(this)
  this.connectScope(commands)

  this.productList = []
  this.shopList = []
  const { get, format, post } = this

  get.shops.list()

  this.runAllFunctions = () => {
    get.shopify.products()
    get.shopify.shopInfo()
    format.products()
    format.shopInfo()
    post.toExcel.products()
  }

  this.sayHi = () => console.log("hi")
}

export default Crawler
