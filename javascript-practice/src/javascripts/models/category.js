import APIService from "./../service/index";

export default class CategoryModel {
	constructor() {
		this.name = "";

		this.apiService = new APIService("/category");
		this.category = []
	}

	/**
	 * Method to retrieve the list of category from the API.
	 * @returns {Promise<Object[]>} A promise that resolves with the list of category.
	 */
	getCategoryList = async () => {
		return this.category = await this.apiService.getList();
	}
}
