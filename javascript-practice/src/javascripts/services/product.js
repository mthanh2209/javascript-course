import { API_PRODUCTS } from "../constants/url";

export default class APICategory {
	constructor() {}
	/**
	 * Get all the products in database
	 * @returns Object
	 */
	async get() {
		const response = await fetch(API_PRODUCTS);
		console.log(response);
		const result = await response.json();

		return {
			status: response.status,
			data: result,
		};
	}
}
