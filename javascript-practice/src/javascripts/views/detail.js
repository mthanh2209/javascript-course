import ProductTemplate from "../template/product";
import ProductView from "./product";

class DetailView extends ProductView {
	constructor() {
		super()
		this.detailSection = document.querySelector(".detail")
	}

	/**
	 * Render the product detail on the view.
	 * @param {Object[]} detail - The product detail data to display.
	 */
	renderProductDetail(detail) {
		const urlParams = new URLSearchParams(window.location.search);
		const productId = parseInt(urlParams.get('id'));

		if (!isNaN(productId)) {
			const selectedProduct = detail.find((item) => item.id === productId);;

			if (selectedProduct) {
				const productDetailTemplate = ProductTemplate.renderProductDetail([selectedProduct]);
				this.detailSection.innerHTML = productDetailTemplate;
			}
		}
	}

	/**
	 * Handle adding a product to the shopping cart.
	 * @param {function} callback - The callback function to execute when adding a product to the cart.
	 */
	addToCart(callback) {
		const addToCartBtn = document.querySelector(".add-to-cart-btn");
		addToCartBtn.addEventListener("click", (e) => {
			const product = {
				id: getURLSearchParam("id"),
				quantity: e.target.closest(".desc-quantity").querySelector(".quantity")
					.value,
			};
			callback(product)
		});
	}

	/**
	 * Update the cart number on the view.
	 * @param {number} getCount - The number of products in the shopping cart.
	 */
	updateCartNumber(getCount) {
		const cartNumber = document.querySelector(".cart-number");
		cartNumber.textContent = getCount;
	}
}

export default DetailView;
