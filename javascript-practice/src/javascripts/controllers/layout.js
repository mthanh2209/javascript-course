import CategoryModel from './../models/category';
import LayoutView from './../views/layout';
import CartModel from './../models/cart';
import ToastNotificationView from './../views/toast';
import { STATE } from '../constants';
import { ERROR_MESSAGE } from '../constants/messages';

export default class LayoutController {
	constructor() {
		this.categoryModel = new CategoryModel()
		this.cartModel = new CartModel()
		this.layoutView = new LayoutView()
		this.toastNotificationView = new ToastNotificationView()

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
		try {
			const categories = await this.categoryModel.getCategoryList();
			this.layoutView.renderLayout(categories);
		} catch (error) {
			this.toastNotificationView.showToastNotification(STATE.FAILED, ERROR_MESSAGE.LOAD_ERROR)
		}
	}

	handleCartNumber() {
		const cartNumber = this.cartModel.getProductsCount();
		this.layoutView.updateCartNumber(cartNumber);
	}
}
