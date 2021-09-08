import XLSX from "xlsx"

export function products() {
  const { productList } = this

  const newBook = XLSX.utils.book_new()
  const newSheet = XLSX.utils.json_to_sheet(productList)

  XLSX.utils.book_append_sheet(newBook, newSheet, "Sheet1")
  XLSX.writeFile(newBook, "new-book.xlsx")
}
