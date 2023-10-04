import { API_PRODUCTS } from "../constants/url";

export default class APIProduct {
	constructor() {}
	/**
	 * Get all the products in the database from the API.
	 * @returns {Object} An object containing the HTTP status and product data.
	 */
	async get() {
		const response = await fetch(API_PRODUCTS);
		const result = await response.json();

		return {
			status: response.status,
			data: result,
		};
	}
}
