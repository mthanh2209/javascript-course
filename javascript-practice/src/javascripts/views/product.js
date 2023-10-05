import ProductModel from "../models/product";
import APIProduct from "../services/product";
class ProductView {
	constructor() {
		this.productModel = new ProductModel();
		this.apiProduct = new APIProduct();
		this.productsListing = document.querySelector(".products-listing");
		this.renderProduct();
	}

	renderProduct = async () => {
		const products = await this.apiProduct.get().then((result) => result.data);
		this.productModel.initProducts(products);

		this.productsListing.innerHTML = "";

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

			this.productsListing.appendChild(productItem);
		});
	};
}

export default ProductView;
