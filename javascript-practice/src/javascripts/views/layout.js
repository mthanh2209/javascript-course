import Header from "../template/header";
import Footer from "../template/footer";
import APICategory from "../services/category";

class LayoutView {
	constructor() {
		this.headerEl = document.querySelector(".main-header");
		this.footerEl = document.querySelector(".main-footer");
		this.renderHeader();
		this.renderFooter();
	}

	//----- RENDERING -----//

	/**
	 * Renders a header element.
	 * @param {Object} header  - header object to render.
	 */
	renderHeader = async () => {
		const categories = new APICategory();
		// Fetch the list of categories from the API.
		const list = (await categories.get()).data;
		const headerTemplate = Header.renderHeader(list);

		// Append headerTemplate to the header element.
		this.headerEl.innerHTML = headerTemplate;
	};

	/**
	 * Renders a header element.
	 * @param {Object} footer  - footer object to render.
	 */
	renderFooter() {
		const footerTemplate = Footer.renderFooter;

		// Append footerTemplate to the footer element.
		this.footerEl.innerHTML = footerTemplate;
	}
}

export default LayoutView;
