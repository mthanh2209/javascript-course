import CartTemplate from "../template/cart";

export default class CartView {
	constructor() {
		this.cartSection = document.querySelector(".cart-table");
		this.subtotalEl = document.querySelector(".subtotal");
	}

	/**
	 * Display the shopping cart with the provided cart items and product data.
	 *
	 * @param {Array} cart - An array of cart items.
	 * @param {Array} product - An array of product data.
	 */
	displayCart(cart, product) {
		if (cart.length == 0) {
			this.cartSection.innerHTML = `<h4>Your cart is empty.</h4>`;
		} else {
			const cartItemsHTML = cart
				.map((item, index) =>
					CartTemplate.renderCart({
						item,
						quantity: cart[index].quantity,
						product: product.find((p) => p.id === item.id),
					}),
				)
				.join("");
			this.cartSection.innerHTML = `
			<tr class="table-header">
				<th class="header-text">Product</th>
				<th class="header-text">Quantity</th>
				<th class="header-text">Total</th>
			</tr>
			${cartItemsHTML}`;

			const subtotal = cart.reduce((total, item) => {
				const productItem = product.find((p) => p.id === item.id);
				return (
					total + (productItem ? productItem.price : 0) * (item.quantity ?? 1)
				);
			}, 0);
			this.subtotalEl.textContent = `£${subtotal}`;
		}
	}
}
