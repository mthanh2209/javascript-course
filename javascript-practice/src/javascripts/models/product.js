import APIService from "../services/service";

export default class ProductModel {
	constructor() {
		this.title = "";
		this.price = 0;
		this.description = "";
		this.categoryId = 0;
		this.dimension = { height: "", width: "", depth: "" };
		this.image = "";

		this.apiService = new APIService("/products");
	}

	/**
	 * Method to retrieve the list of product from the API.
	 * @returns {Promise<Object[]>} A promise that resolves with the list of product.
	 */
	getProductList = () => this.apiService.getList();

	/**
	* Method to retrieve detailed information for a specific product from the API.
	* @param {string} id - The ID of the product to retrieve details for.
	* @returns {Promise<Object>} A promise that resolves with the detailed product object.
	*/
	getProductDetail = (id) => this.apiService.getDetail(id);

	/**
	 * Find products based on search data.
	 * @param {string} searchData - The search data to filter products by title.
	 * @returns {Promise<Object[]>} A promise that resolves with the filtered products.
	 */
	findProduct = async (searchData) => {
		const productList = await this.getProductList();

		return searchData === "" ? [] : productList.filter((product) =>
			product.title.toLowerCase().includes(searchData));
	};
}
