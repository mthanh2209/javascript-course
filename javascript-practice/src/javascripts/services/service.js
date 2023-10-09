import { API_URL } from '../constants/url';

export default class APIService {
	constructor(path) {
		this.apiUrl = API_URL;
		this.path = path;
	}

	/**
	 * Method to return an array of object list
	 * @returns {Array}
	 */
	getList = () => this.sendRequest(null, "get");

	/**
	 * Method to send an HTTP request to the API endpoint.
	 * @param {String} path - The endpoint path for the request.
	 * @param {String} method - The HTTP method (GET, POST, PUT, DELETE, etc.).
	 * @param {Object} body - The request body (optional).
	 * @return {Promise} A promise that resolves to the server response data.
	 * @throws {Error} If the request was not successful.
	 */
	sendRequest = async (id, method, body) => {
		const url = `${this.apiUrl}${this.path}${id ? `/${id}` : ""}`;
		const response = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		if (response.ok) {
			return await response.json();
		} else {
			throw new Error("Error while sending request");
		}
	};
}
