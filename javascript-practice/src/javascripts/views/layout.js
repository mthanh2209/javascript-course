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
	 * @param {Array} categories - The list of categories to be displayed in the header and footer.
	 */
	renderLayout = (categories) => {
		// Render the header and footer templates.
		const headerTemplate = Header.renderHeader(categories);
		const footerTemplate = Footer.renderFooter(categories);

		// Append the templates to their respective elements.
		this.headerEl.innerHTML = headerTemplate;
		this.footerEl.innerHTML = footerTemplate;
	};
}

export default LayoutView;
