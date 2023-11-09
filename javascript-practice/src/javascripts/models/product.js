import APIService from "./../service/index";

export default class ProductModel {
  constructor() {
    this.apiService = new APIService("/products");
    this.products = []
  }

  /**
   * Method to retrieve the list of product from the API.
   * @returns {Promise<Object[]>} A promise that resolves with the list of product.
   */
  getProductList = async () => {
    return this.products = await this.apiService.getList();
  }

  /**
   * Method to retrieve detailed information for a specific product from the API.
   * @param {string} id - The ID of the product to retrieve details for.
   * @returns {Promise<Object>} A promise that resolves with the detailed product object.
   */
  getProductDetail = (id) => { return this.apiService.getDetail(id); }

  /**
   * Find products based on search data.
   * @param {string} searchData - The search data to filter products by title.
   * @returns {Promise<Object[]>} A promise that resolves with the filtered products.
   */
  findProduct = async (searchData) => {
    return searchData === "" ? [] : this.products.filter((product) =>
      product.title.toLowerCase().includes(searchData));
  };
}
