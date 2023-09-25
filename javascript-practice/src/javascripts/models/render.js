class Render {
	constructor() { }

	/**
	 * Asynchronously fetches the header data from a specified URL.
	 * @returns {Promise<string>} - The header data as a string.
	 */
	async fetchHeaderData() {
		const res = await fetch("../../pages/header.html");
		return await res.text();
	}

	/**
	 * Asynchronously fetches the footer data from a specified URL.
	 * @returns {Promise<string>} - The footer data as a string.
	 */
	async fetchFooterData() {
		const res = await fetch("../../pages/footer.html");
		return await res.text();
	}
}

export default Render;
