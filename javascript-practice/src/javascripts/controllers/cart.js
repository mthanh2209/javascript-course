import HomeController from "./home";

export default class CartController extends HomeController {
	constructor(cartView) {
		super();
		this.cartView = cartView;

		this.init();
	}

	init = async () => {
		await this.handleDisplayCart();
		this.cartView.setupItemEvent();
	};

	/**
	 * Handle the display of the shopping cart by fetching product data and cart items.
	 */
	handleDisplayCart = async () => {
		const product = await this.productModel.getProductList();
		const cart = this.cartModel.getProduct(product);
		this.cartView.displayCart(cart, product);
	};
}
