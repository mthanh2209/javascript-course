export default class HomeController {
	constructor(productModel, categoryModel, cartModel, productView, layoutView) {
		this.productModel = productModel;
		this.categoryModel = categoryModel;
		this.cartModel = cartModel;
		this.productView = productView;
		this.layoutView = layoutView;

		this.init();
	}

	init = async () => {
		await this.handleRenderCategory();
		this.handleRenderProduct();
		this.initFindProduct();
		this.handleCartNumber();

		this.productView.addEventSwitchPage();
		this.productView.addEventMoreProduct();
		this.productView.addEventFilters();

		this.layoutView.addEventCartPage();
		this.layoutView.addEventForIcons();
	};

	/**
	 * Get the category list from model
	 * Then execute renderLayout method in view
	 */
	async handleRenderCategory() {
		const categories = await this.categoryModel.getCategoryList();
		this.layoutView.renderLayout(categories);
	}

	/**
	 * Get the product list from model
	 * Then execute renderProduct method in view
	 */
	async handleRenderProduct() {
		const products = await this.productModel.getProductList();
		this.productView.renderProduct(products);
	}

	handleCartNumber() {
		const cartNumber = this.cartModel.getProductsCount();
		this.layoutView.updateCartNumber(cartNumber);
	}

	/**
	 * Initialize functionality to find products.
	 */
	initFindProduct = () => {
		this.productView.addEventFindProduct(this.findProduct);
		this.productView.addEventEnter(this.findProduct);
	};

	/**
	 * Find products based on search data.
	 *
	 * @param {string} searchData - The search data to filter products by title.
	 * @returns {Promise<Object[]>} A promise that resolves with the filtered products.
	 */
	findProduct = async (searchData) => {
		return await this.productModel.findProduct(searchData);
	};
}
