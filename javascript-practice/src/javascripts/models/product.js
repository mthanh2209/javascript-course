import APIService from "../services/service"

export default class ProductModel {
	constructor(id, title, price, description, categoryId, dimension, image) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.description = description;
		this.categoryId = categoryId;
		this.dimension = dimension;
		this.image = image;

		this.apiService = new APIService("/products")
	}

	/**
	 * Method to retrieve the list of product from the API.
	 * @returns {Promise<Object[]>} A promise that resolves with the list of product.
	 */
	getProductList = () => this.apiService.getList()
}
