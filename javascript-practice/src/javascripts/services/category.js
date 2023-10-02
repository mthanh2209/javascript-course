import { API_CATEGORIES } from "../constants/url";

export default class APICategory {
	constructor() {}
	/**
	 * Get all the category in database
	 * @returns Object
	 */
	async get() {
		const response = await fetch(API_CATEGORIES);
		const result = await response.json();

		return {
			status: response.status,
			data: result,
		};
	}
}
