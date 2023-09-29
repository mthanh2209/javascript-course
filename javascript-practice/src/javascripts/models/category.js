import APICategory from "../services/category"
export default class CategoryModel {
	constructor() {
		this.apiCategory = new APICategory();
	}

	async getCategoryList() {
		const result = await this.apiCategory.get();
		const categories = result.data;
		return categories;
	}
}
