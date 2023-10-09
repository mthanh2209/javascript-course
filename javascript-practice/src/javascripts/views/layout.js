import Header from "../template/header";
import Footer from "../template/footer";
import CategoryModel from "../models/category";

class LayoutView {
	constructor() {
		this.categoryModel = new CategoryModel()
		this.headerEl = document.querySelector(".main-header");
		this.footerEl = document.querySelector(".main-footer");
		this.renderLayout();
	}

	//----- RENDERING -----//

	/*
	 * Renders the header and footer elements.
	 * This function fetches the list of categories from the API and renders the header
	 * and footer templates using the retrieved data.
	 */
	renderLayout = async () => {
		const categories = await this.categoryModel.getCategoryList();

		// Render the header and footer templates.
		const headerTemplate = Header.renderHeader(categories);
		const footerTemplate = Footer.renderFooter(categories);

		// Append the templates to their respective elements.
		this.headerEl.innerHTML = headerTemplate;
		this.footerEl.innerHTML = footerTemplate;
	};
}

export default LayoutView;
