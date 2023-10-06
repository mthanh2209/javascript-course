import ProductModel from "../models/product";

class ProductView {
	constructor() {
		this.productModel = new ProductModel();
		this.productsListing = document.querySelector(".products-listing");
		this.renderProduct();
	}

	/**
	 * Render the list of products on the web page.
	 * @async
	 * @returns {Promise<void>} A promise that resolves when the rendering is complete.
	 */
	renderProduct = async () => {
		// Fetch products from the API.
		const products = await this.productModel.getProductList();;

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
}

export default ProductView;
