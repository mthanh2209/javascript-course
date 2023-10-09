import APIHelper from "../services/helpers"

export default class ProductModel {
	constructor() {
		this.apiHelper = new APIHelper("/products")
	}

	/**
	 * Method to retrieve the list of product from the API.
	 * @returns {Promise<Object[]>} A promise that resolves with the list of product.
	 */
	getProductList = () => this.apiHelper.getList()
}
