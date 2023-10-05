class ProductModel {
	constructor() {
		this.products = [];
	}

	/**
	 * Method gets the initial product list
	 * @param {Array} products
	 */
	initProducts(products) {
		this.products = products;
		this.notify(products);
		return products;
	}
}

export default ProductModel;
