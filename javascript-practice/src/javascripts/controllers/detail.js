import ProductController from "./product";

export default class DetailController extends ProductController {
	constructor(detailView) {
		super();
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
