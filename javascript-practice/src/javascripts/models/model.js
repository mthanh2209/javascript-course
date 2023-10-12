import CategoryModel from "./category";
import ProductModel from "./product";

class Model {
	constructor() {
		this.category = new CategoryModel();
		this.product = new ProductModel();
	}
}

export default Model;
