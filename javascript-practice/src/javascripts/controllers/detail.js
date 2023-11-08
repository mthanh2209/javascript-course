import { STATE } from "../constants";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/messages";
import HomeController from "./home";

export default class DetailController extends HomeController {
	/**
	 * Create a new DetailController.
	 * @param {CartModel} cartModel - The cart model to manage the shopping cart.
	 * @param {DetailView} detailView - The detail view to display product details.
	 */
	constructor(cartModel, detailView, toastNotificationView) {
		super();
		this.cartModel = cartModel;
		this.detailView = detailView;
		this.toastNotificationView = toastNotificationView;

		this.init();
	}

	init = async () => {
		await this.handleRenderProductDetail();
		this.handleAddToCart();
		this.detailView.setupItemEvent();
	};

	/**
	 * Render the product detail on the view.
	 */
	async handleRenderProductDetail() {
		const detail = await this.productModel.getProductDetail();
		this.detailView.renderProductDetail(detail);
	}

	/**
	 * Handle adding a product to the shopping cart.
	 */
	async handleAddToCart() {
		this.detailView.addToCart(async (product) => {
			try {
				const isSuccess = await this.cartModel.addToCart(product);
				if (isSuccess) {
					const getCount = this.cartModel.getProductsCount();
					this.detailView.updateCartNumber(getCount);

					this.toastNotificationView.showToastNotification(STATE.SUCCESS, SUCCESS_MESSAGE.ADD_TO_CART)
				}
			} catch {
				this.toastNotificationView.showToastNotification(STATE.FAILED, ERROR_MESSAGE.ADD_TO_CART)
			}
		});
	}
}
