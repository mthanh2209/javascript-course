import APIService from "../services/service"

export default class CategoryModel {
	constructor(name) {
		this.name = name;

		this.apiService = new APIService("/category")
	}

	/**
	 * Method to retrieve the list of category from the API.
	 * @returns {Promise<Object[]>} A promise that resolves with the list of category.
	 */
	getCategoryList = () => this.apiService.getList()
}
