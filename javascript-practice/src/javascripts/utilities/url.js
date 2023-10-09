class Utilities {
	constructor() { }

	/**
		 * Builds a URL for a specific resource ID.
		 * @param {string|null} id - The ID of the resource (optional).
		 * @returns {string} The constructed URL.
		 */
	buildUrl(apiUrl, path, id) {
		return `${apiUrl}${path}${id ? `/${id}` : ""}`;
	}
}

export const utilities = new Utilities();
