class Controller {
	/**
	 * Constructor of Controller object
	 * @param {Object} model - The model component responsible for data management.
	 * @param {Object} view - The view component responsible for rendering UI elements.
	 */
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init = () => {
		this.initCategoryView()
		this.initProductView()
		this.handleNextPage()
	}

	/**
	 * Get the category list from model
	 * Then execute renderLayout method in view
	 */
	async initCategoryView() {
		const categories = await this.model.category.getCategoryList();
		this.view.layout.renderLayout(categories);
	}

	/**
	 * Get the product list from model
	 * Then execute renderProduct method in view
	 */
	async initProductView() {
		const products = await this.model.product.getProductList();
		this.view.product.renderProduct(products);
	}

	/**
	 * Handled when the View Collection button is clicked
	 * Then go to the product-listing.html page
	 */
	handleSwitchPage() {
		this.view.product.addEventSwitchPage();
	}
}

export default Controller;
