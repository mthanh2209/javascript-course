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
}
