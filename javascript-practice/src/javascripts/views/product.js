class ProductView {
	constructor() {
		this.productsListing = document.querySelector(".products-listing");
		this.loadMoreButton = document.querySelector(".load-more-btn");
		this.products = [];
		this.displayProduct = 3;
		this.nextProduct = 3;
	}

	/**
	 * Render the specified products in the product listing element.
	 * @param {Array} [products] - The array of products to render. If not provided, the existing products will be rendered.
	 */
	renderProduct = (products) => {
		this.products = products && Array.isArray(products) ? products : this.products

		this.productsListing.innerHTML = "";

		this.products.slice(0, this.displayProduct).forEach((product) => {
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
			const newProducts = this.products.slice(this.displayProduct, this.displayProduct + this.nextProduct);
			this.displayProduct += this.nextProduct;
			this.renderProduct(null, newProducts);
		});
	}
}

export default ProductView;
