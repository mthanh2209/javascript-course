import Header from "../template/header";
import Footer from "../template/footer";
import APICategory from "../services/category";

class LayoutView {
	constructor() {
		this.headerEl = document.querySelector(".main-header");
		this.footerEl = document.querySelector(".main-footer");
		this.renderLayout();
	}

	//----- RENDERING -----//

	/**
	 * Renders the header and footer elements.
	 * @param {Object} data  - data to render the header and footer.
	 */
	renderLayout = async () => {
		const categories = new APICategory();
		// Fetch the list of categories from the API.
		const list = (await categories.get()).data;

		// Render the header and footer templates.
		const headerTemplate = Header.renderHeader(list);
		const footerTemplate = Footer.renderFooter(list);

		// Append the templates to their respective elements.
		this.headerEl.innerHTML = headerTemplate;
		this.footerEl.innerHTML = footerTemplate;
	};
}

export default LayoutView;
