import CategoryModel from './../models/category';
import LayoutView from './../views/layout';
import CartModel from './../models/cart';

export default class LayoutController {
	constructor() {
		this.categoryModel = new CategoryModel()
		this.cartModel = new CartModel()
		this.layoutView = new LayoutView()

		this.init()
	}

	init = async () => {
		await this.handleRenderCategory()
		this.handleCartNumber();

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

	handleCartNumber() {
		const cartNumber = this.cartModel.getProductsCount();
		this.layoutView.updateCartNumber(cartNumber);
	}
}
