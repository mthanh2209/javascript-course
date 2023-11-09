import ProductController from "./product";

export default class CartController extends ProductController {
	constructor(cartView) {
		super();
		this.cartView = cartView;

		this.init();
	}

	init = async () => {
		await this.handleDisplayCart();
		this.cartView.setupItemEvent(this.cartModel.updateProductQuantity);
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
