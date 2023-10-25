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

	/**
	 * Add an event listener for loading more products.
	 */
	addEventMoreProduct = () => {
		this.loadMoreButton.addEventListener("click", async (e) => {
			e.preventDefault()
			const newProducts = this.products.slice(this.displayedProducts, this.displayedProducts + this.newProducts);
			this.displayedProducts += this.newProducts;
			this.renderProduct(null, newProducts);
		});

		/**
		 * Add an event listener for switching to the product listing page.
		 */
		addEventSwitchPage = () => {
			this.viewCollectionButton.forEach((button) => {
				button.addEventListener("click", () => {
					window.location.href = PRODUCT_LISTING_PAGE;
				});
			})
		}

		/**
		 * Add an event listener for the find product button click.
		 *
		 * @param {Function} findProduct - The function to find products based on search input.
		 */
		addEventFindProduct = (findProduct) => {
			const searchEL = document.querySelector(".search-icon");
			searchEL.addEventListener("click", () => this.handleFindProduct(findProduct));
		};

		/**
		 * Add an event listener for the Enter key press in the search input field.
		 *
		 * @param {Function} findProduct - The function to find products based on search input.
		 */
		addEventEnter = (findProduct) => {
			const searchInput = document.querySelector(".search-input")
			searchInput.addEventListener("keyup", (e) => {
				if (e.key === "Enter") {
					this.handleFindProduct(findProduct);
				}
			});
		};

		/**
		 * Render the found products in the product listing element.
		 *
		 * @param {Array} products - The array of products to render.
		 */
		renderFindProduct = (products) => {
			this.productsListing.innerHTML = "";

			products.forEach((product) => {
				const productItem = document.createElement("li");
				const productImg = document.createElement("img");
				const productTitle = document.createElement("h4");
				const productPrice = document.createElement("p");
				const productLink = document.createElement("a");

				productItem.className = "products-item";
				productItem.setAttribute("data-id", product.id);

				productImg.className = "products-img";
				productImg.src = product.image;
				productImg.alt = product.title;

				productTitle.textContent = product.title;

				productPrice.classList.add("products-per");
				productPrice.textContent = `£${product.price}`;

				productLink.href = `${DETAIL_PAGE}?id=${product.id}`;
				productLink.style.textDecoration = "none";

				productItem.appendChild(productImg);
				productItem.appendChild(productTitle);
				productItem.appendChild(productPrice);

				productLink.appendChild(productItem);

				this.productsListing.appendChild(productLink);
			})
		};

		/**
		 * Handle the find product event.
		 *
		 * @param {Function} findProduct - The function to find products based on search input.
		 */
		handleFindProduct = async (findProduct) => {
			const searchInput = document.querySelector(".search-input")
			let inputData = searchInput.value.toLowerCase();

			const isProduct = await findProduct(inputData);

			this.renderFindProduct(isProduct);
			searchInput.value = "";
		};
	}
}

export default ProductView;
