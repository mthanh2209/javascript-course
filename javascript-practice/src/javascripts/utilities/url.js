/**
 * Build a URL by combining the API URL, path, and optional ID.
 *
 * @param {string} apiUrl - The base API_URL.
 * @param {string} path - The path to append to the base URL.
 * @param {string} [id] - (Optional) An ID to append to the path (if provided).
 * @returns {string} The constructed URL.
 */
export function buildUrl(apiUrl, path, id) {
	return `${apiUrl}${path}${id ? `/${id}` : ""}`;
}

/**
 * Get a URL search parameter by key.
 *
 * @param {string} key - The key of the URL search parameter to retrieve.
 * @returns {number} The parsed integer value of the search parameter or NaN if not found.
 */
export function getURLSearchParam(key) {
	const urlParams = new URLSearchParams(window.location.search);
	return parseInt(urlParams.get(key));
}
