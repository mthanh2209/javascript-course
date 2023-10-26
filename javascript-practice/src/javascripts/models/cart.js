import { DATA_SOURCES } from "../constants";
import { getURLSearchParam } from "../utilities";
import Storage from "../utilities/storageHelper";

export default class CartModel {
	constructor() {
		this.products = Storage.getData(DATA_SOURCES.CART) ?? [];
	}

	/**
	 * Synchronize the cart data with the local storage.
	 */
	sync() {
		Storage.setData(DATA_SOURCES.CART, this.products);
		this.products = Storage.getData(DATA_SOURCES.CART);
	}

	/**
	 * Add a product to the shopping cart or update its quantity if it already exists.
	 *
	 * @param {Object} product - The product to add to the cart.
	 * @returns {boolean} True if the product was successfully added or updated.
	 */
	addToCart(product) {
		const productId = getURLSearchParam("id");
		const productIndex = this.products.findIndex((event) => event.id === productId);
		if (productIndex !== -1) {
			this.products[productIndex].quantity =
				Number(this.products[productIndex].quantity) + Number(product.quantity);
			this.sync();
			return true;
		}
		this.products.push(product);
		this.sync();
		return true;
	}

	/**
	 * Get the products in the shopping cart.
	 * @returns {Array} An array of products in the shopping cart.
	 */
	getProduct() {
		return this.products;
	}

	/**
	 * Get the total count of products in the shopping cart.
	 * @returns {number} The total count of products in the shopping cart.
	 */
	getProductsCount() {
		return this.products.length;
	}

	/**
	 * Reset the shopping cart, removing all products.
	 */
	reset() {
		this.products = [];
		Storage.removeData(DATA_SOURCES.CART);
	}
}
