import HomeController from "./home";

export default class DetailController extends HomeController {
	constructor(detailView) {
		super();
		this.detailView = detailView;

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
			const isSuccess = await this.cartModel.addToCart(product);
			if (isSuccess) {
				const getCount = this.cartModel.getProductsCount();
				this.detailView.updateCartNumber(getCount);
			}
		});
	}
}
