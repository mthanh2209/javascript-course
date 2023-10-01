import { API_URL } from '../constants/url';

export default class APIHelper {
	/**
	 * Create options object for request
	 * @param {String} method
	 * @param {*} data
	 * @returns Object
	 */
	static requestOptions(method, data, contentType = 'application/json') {
		return {
			method,
			body: JSON.stringify(data),
			headers: {
				'Content-Type': contentType,
			},
		};
	}

	/**
	 * Get the full path of API endpoint
	 * @param {String} path
	 * @returns String
	 */
	static apiEndpoint(path) {
		return `${API_URL}${path}`;
	}
}
