import { PRODUCT_LISTING_PAGE } from "../constants/url";

class ProductView {
	constructor() {
		this.productsListing = document.querySelector(".products-listing");
		this.loadMoreButton = document.querySelector(".load-more-btn");
		this.viewCollectionButton = document.querySelectorAll(".product-view");
		this.products = [];
		this.displayedProducts = 4;
		this.newProducts = 3;
	}

	/**
	 * Render the specified products in the product listing element.
	 * @param {Array} [products] - The array of products to render. If not provided, the existing products will be rendered.
	 */
	renderProduct = (products) => {
		this.products = products && Array.isArray(products) ? products : this.products

		this.productsListing.innerHTML = "";

		this.products.slice(0, this.displayedProducts).forEach((product) => {
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

			this.productsListing.appendChild(productItem);
		});
	};

	//----- EVENT LISTENER -----//

	addEventMoreProduct = () => {
		this.loadMoreButton.addEventListener("click", async (e) => {
			e.preventDefault()
			const newProducts = this.products.slice(this.displayedProducts, this.displayedProducts + this.newProducts);
			this.displayedProducts += this.newProducts;
			this.renderProduct(null, newProducts);
		});

		addEventSwitchPage = () => {
			this.viewCollectionButton.forEach((button) => {
				button.addEventListener("click", () => {
					window.location.href = PRODUCT_LISTING_PAGE;
				});
			})
		}
	}
}

export default ProductView;
