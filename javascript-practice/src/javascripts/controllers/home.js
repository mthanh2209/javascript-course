export default class HomeController {
	/**
	 * Constructor of Controller object
	 * @param {Object} productModel - The model for handling product data.
	 * @param {Object} productView - The view for rendering product data and handling user interactions.
	 */
	constructor(productModel, productView) {
		this.productModel = productModel;
		this.productView = productView;

		this.init();
	}

	init = () => {
		this.handleRenderCategory()
		this.handleRenderProduct()
		this.productView.addEventSwitchPage();
		this.productView.addEventMoreProduct();
		this.productView.renderProduct();
	}

	/**
	 * Get the category list from model
	 * Then execute renderLayout method in view
	 */
	async handleRenderCategory() {
		const categories = await this.model.category.getCategoryList();
		this.view.layout.renderLayout(categories);
	}

	/**
	 * Get the product list from model
	 * Then execute renderProduct method in view
	 */
	async handleRenderProduct() {
		const products = await this.model.product.getProductList();
		this.view.product.renderProduct(products);
	}
}
