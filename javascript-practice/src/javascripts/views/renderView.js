class RenderView {

	/**
	 * Constructor of RenderView object
	 * @param {Function} loadHeaderFooter - The function to load the header and footer.
	 */
	constructor(loadHeaderFooter) {
		this.loadHeaderFooter = loadHeaderFooter;
	}

	/**
	 * Renders the header content using the provided data.
	 * @param {string} data - The HTML content for the header.
	 */
	renderHeader = (data) => {
		const header = document.querySelector(".main-header");
		header.innerHTML = data;
	}

	/**
	 * Renders the footer content using the provided data.
	 * @param {string} data - The HTML content for the footer.
	 */
	renderFooter = (data) => {
		const footer = document.querySelector(".main-footer");
		footer.innerHTML = data;
	}
}

export default RenderView;
