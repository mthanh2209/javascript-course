export default class Controller {
	/**
	 * Constructor of Controller object
	 * @param {Object} model - The model component responsible for data management.
	 * @param {Object} view - The view component responsible for rendering UI elements.
	 */
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	/**
	 * Initializes the controller by initializing the category view and product view.
	 */
	init = () => {
		this.initCategoryView()
		this.initProductView()
	}

	/**
	 * Initializes the category view by fetching categories from the model and rendering the layout.
	 */
	async initCategoryView() {
		/**
		 * An array of category objects.
		 * @type {Object[]}
		 */
		const categories = await this.model.category.getCategoryList();
		this.view.layout.renderLayout(categories);
	}

	/**
	 * Initializes the product view by fetching products from the model and rendering the products.
	 */
	async initProductView() {
		/**
		 * An array of product objects.
		 * @type {Object[]}
		 */
		const products = await this.model.product.getProductList();
		this.view.product.renderProduct(products);
	}
}
