import APIService from "../services/service"

export default class ProductModel {
	constructor(title, price) {
		this.title = title;
		this.price = price;

		this.apiService = new APIService("/products")
	}

	/**
	 * Method to retrieve the list of product from the API.
	 * @returns {Promise<Object[]>} A promise that resolves with the list of product.
	 */
	getProductList = () => this.apiService.getList()
}
