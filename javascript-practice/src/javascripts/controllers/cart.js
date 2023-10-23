import LayoutController from "./layout";
import CartModel from "./../models/cart";
import ProductModel from "./../models/product";
import CartView from "../views/cart";

export default class CartController extends LayoutController {
	constructor() {
		super();
		this.cartModel = new CartModel();
		this.productModel = new ProductModel();
		this.cartView = new CartView();

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
