import ProductModel from "../models/product";
import APIProduct from "../services/product";
class ProductView {
	constructor() {
		this.productModel = new ProductModel();
		this.apiProduct = new APIProduct();
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
		const products = await this.apiProduct.get().then((result) => result.data);
		this.productModel.initProducts(products);

		// Clear the product listing container.
		this.productsListing.innerHTML = "";

		// Iterate through each product and create HTML elements to display them.
		products.forEach((product) => {
			const productItem = document.createElement("li");
			productItem.className = "products-item";

			const productImg = document.createElement("img");
			productImg.className = "products-img";

			productImg.src = product.image;
			productImg.alt = product.title;
			productItem.appendChild(productImg);

			const productTitle = document.createElement("h4");
			productTitle.textContent = `${product.title}`;
			productItem.appendChild(productTitle);

			const productPrice = document.createElement("p");
			productPrice.classList.add("products-per");
			productPrice.textContent = `£${product.price}`;
			productItem.appendChild(productPrice);

			// Append the product item to the products listing container.
			this.productsListing.appendChild(productItem);
		});
	};
}

export default ProductView;
