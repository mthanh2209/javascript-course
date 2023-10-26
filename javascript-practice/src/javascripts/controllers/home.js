export default class HomeController {
	/**
		 * Constructor of the Controller object.
		 * @param {Object} productModel - The model for handling product data.
		 * @param {Object} categoryModel - The model for handling category data.
		 * @param {Object} productView - The view for rendering product data and handling user interactions.
		 * @param {Object} layoutView - The view for rendering the layout and handling layout-related interactions.
		 */
	constructor(productModel, categoryModel, productView, layoutView) {
		this.productModel = productModel;
		this.categoryModel = categoryModel;
		this.productView = productView;
		this.layoutView = layoutView;

		this.init();
	}

	init = async () => {
		await this.handleRenderCategory()
		this.handleRenderProduct()
		this.initFindProduct()

		this.productView.addEventSwitchPage();
		this.productView.addEventMoreProduct();

		this.layoutView.addEventCartPage();
		this.layoutView.addEventForIcons();
	}

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
