import APIProduct from "../services/product";

class ProductModel {
	constructor() {
		this.apiProduct = new APIProduct();
	}

	/**
	 * Fetches the list of products from the API.
	 * @returns {Promise<Array>} A Promise that resolves to an array of products.
	 */
	getProductList = () => this.apiProduct.get().then((result) => result.data);
}

export default ProductModel;
