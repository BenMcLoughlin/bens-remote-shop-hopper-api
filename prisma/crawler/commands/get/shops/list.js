import mock from '../../../mocks/shopsList.json';

export function list() {
  this.shopList = mock.shopList;

  return this;
}

// TODO
/*
1. Shop list data will be configured in airtable and pulled from there.
2. Split and sorted according to the type of scraping needed to get the data from the API's or actual scrapers
*/
