import { DETAIL_PAGE, PRODUCT_LISTING_PAGE } from "../constants/url";
import { FILTER_TYPE } from "../constants";
import { FILTER_STRATEGIES } from "../utilities";

class ProductView {
	constructor() {
		this.productsListing = document.querySelector(".products-listing");
		this.loadMoreButton = document.querySelector(".load-more-btn");
		this.viewCollectionButton = document.querySelectorAll(".view-collection-button");
		this.products = [];
		this.displayedProducts = 4;
		this.newProducts = 3;
	}

	/**
	 * Create the DOM structure for a product and append it to the product listing.
	 * @param {Object} product - The product object to create DOM elements for.
	 */
	createProductDOM(product) {
		const productItem = document.createElement("li");
		const productImg = document.createElement("img");
		const productTitle = document.createElement("h4");
		const productPrice = document.createElement("p");
		const productLink = document.createElement("a");

		productItem.className = "products-item";
		productItem.value = product.categoryId;
		productItem.setAttribute("data-id", product.id);

		productImg.className = "products-img";
		productImg.src = product.image;
		productImg.alt = product.title;

		productTitle.textContent = `${product.title}`;

		productPrice.classList.add("products-per");
		productPrice.textContent = `£${product.price}`;

		productLink.href = `${DETAIL_PAGE}?id=${product.id}`;
		productLink.style.textDecoration = "none";

		productItem.appendChild(productImg);
		productItem.appendChild(productTitle);
		productItem.appendChild(productPrice);

		productLink.appendChild(productItem);

		this.productsListing.appendChild(productLink);
	}

	/**
	 * Render the specified products in the product listing element.
	 * @param {Array} [products] - The array of products to render. If not provided, the existing products will be rendered.
	 * @param {string} type - The filter type (FILTER_TYPE.CATEGORY or FILTER_TYPE.PRICE).
	 */
	renderProduct = (products, type) => {
		if (type !== FILTER_TYPE) {
			this.products = products && Array.isArray(products) ? products : this.products;
			this.productsListing.innerHTML = "";

			this.products.slice(0, this.displayedProducts).forEach((product) => {
				this.createProductDOM(product);
			});
			return;
		}

		if (products) {
			this.productsListing.innerHTML = "";

			products.slice(0, this.displayedProducts).forEach((product) => {
				this.createProductDOM(product);
			});
		}
	};

	//----- EVENT LISTENER -----//

	/**
	 * Add an event listener for loading more products.
	 */
	addEventMoreProduct = () => {
		if (this.loadMoreButton) {
			this.loadMoreButton.addEventListener("click", async (e) => {
				e.preventDefault();
				const newProducts = this.products.slice(
					this.displayedProducts,
					this.displayedProducts + this.newProducts,
				);
				this.displayedProducts += this.newProducts;
				this.renderProduct(null, newProducts);
			});
		}
	};
	/**
	 * Add an event listener for switching to the product listing page.
	 */
	addEventSwitchPage = () => {
		this.viewCollectionButton.forEach((button) => {
			button.addEventListener("click", () => {
				window.location.href = PRODUCT_LISTING_PAGE;
			});
		});
	};

	/**
	 * Add an event listener for the find product button click.
	 *
	 * @param {Function} findProduct - The function to find products based on search input.
	 */
	addEventFindProduct = (findProduct) => {
		const searchEL = document.querySelector(".search-icon");
		searchEL.addEventListener("click", () =>
			this.handleFindProduct(findProduct),
		);
	};

	/**
	 * Add an event listener for the Enter key press in the search input field.
	 * @param {Function} findProduct - The function to find products based on search input.
	 */
	addEventEnter = (findProduct) => {
		const searchInput = document.querySelector(".search-input");
		searchInput.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				this.handleFindProduct(findProduct);
			}
		});
	};

	/**
	 * Add event listeners for product filters.
	 */
	addEventFilters = () => {
		const categoryFilters = document.querySelectorAll('input[name="product-type"]');
		const priceFilters = document.querySelectorAll('input[name="price"]');

		categoryFilters.forEach((filter) => {
			filter.addEventListener("change", this.initializeFilters(FILTER_TYPE.CATEGORY));
		});

		priceFilters.forEach((filter) => {
			filter.addEventListener("change", this.initializeFilters(FILTER_TYPE.PRICE));
		});
	};

	/**
	 * Render the found products in the product listing element.
	 * @param {Array} products - The array of products to render.
	 */
	renderFindProduct = (products) => {
		this.productsListing.innerHTML = "";

		products.forEach((product) => {
			this.createProductDOM(product);
		});
	};

	/**
	 * Handle the find product event.
	 * @param {Function} findProduct - The function to find products based on search input.
	 */
	handleFindProduct = async (findProduct) => {
		const searchInput = document.querySelector(".search-input");
		let inputData = searchInput.value.toLowerCase();

		const isProduct = await findProduct(inputData);

		this.renderFindProduct(isProduct);
		searchInput.value = "";
	};

	/**
	 * Initialize filters to the product list based on the filter type.
	 * @param {string} type - The filter type (FILTER_TYPE.CATEGORY or FILTER_TYPE.PRICE).
	 * @returns {Function} - An event handler function for filter changes.
	 */
	initializeFilters = (type) => {
		return (e) => {
			const checked = e.target;
			let filteredProducts;

			if (!checked) {
				filteredProducts = this.products;
			} else {
				filteredProducts = FILTER_STRATEGIES[type](e.target, this.products);
				this.renderProduct(filteredProducts, FILTER_TYPE);
			}
		};
	};
}

export default ProductView;
