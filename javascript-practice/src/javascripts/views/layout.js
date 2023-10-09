import Header from "../template/header";
import Footer from "../template/footer";

class LayoutView {
	constructor() {
		this.headerEl = document.querySelector(".main-header");
		this.footerEl = document.querySelector(".main-footer");
	}

	/**
	 * Renders the header and footer elements.
	 * This function fetches the list of categories from the API and renders the header
	 * and footer templates using the retrieved data.
	 *
	 * @param {Function} getCategoryList - A function to fetch the list of categories from the API.
	 */
	renderLayout = (getCategoryList) => {
		// Render the header and footer templates.
		const headerTemplate = Header.renderHeader(getCategoryList);
		const footerTemplate = Footer.renderFooter(getCategoryList);

		// Append the templates to their respective elements.
		this.headerEl.innerHTML = headerTemplate;
		this.footerEl.innerHTML = footerTemplate;
	};
}

export default LayoutView;
