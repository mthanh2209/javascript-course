import { PRODUCT_LISTING_PAGE } from "../constants/url";

class ProductView {
	constructor() {
		this.productsListing = document.querySelector(".products-listing");
		this.viewCollectionButton = document.querySelectorAll(".product-view");
	}

	/**
	 * Renders the list of products on the web page.
	 * @param {Object[]} products - An array of product objects to render.
	 * @returns {Promise<void>} A promise that resolves when the rendering is complete.
	 */
	renderProduct = (products) => {
		// Clear the product listing container.
		this.productsListing.innerHTML = "";

		// Iterate through each product and create HTML elements to display them.
		products.forEach((product) => {
			const productItem = document.createElement("li");
			const productImg = document.createElement("img");
			const productTitle = document.createElement("h4");
			const productPrice = document.createElement("p");

			productItem.className = "products-item";

			productImg.className = "products-img";
			productImg.src = product.image;
			productImg.alt = product.title;

			productTitle.textContent = `${product.title}`;

			productPrice.classList.add("products-per");
			productPrice.textContent = `£${product.price}`;

			productItem.appendChild(productImg);
			productItem.appendChild(productTitle);
			productItem.appendChild(productPrice);

			// Append the product item to the products listing container.
			this.productsListing.appendChild(productItem);
		});
	};

	addEventSwitchPage = () => {
		this.viewCollectionButton.forEach((button) => {
			button.addEventListener("click", () => {
				window.location.href = PRODUCT_LISTING_PAGE;
			});
		})
	}
}

export default ProductView;
