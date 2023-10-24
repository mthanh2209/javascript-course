import LayoutController from "./layout";

export default class CartController extends LayoutController {
	constructor(cartModel, productModel, cartView) {
		super();
		this.cartModel = cartModel;
		this.productModel = productModel;
		this.cartView = cartView;

		this.init();
	}

	init = async () => {
		await this.handleDisplayCart();
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
