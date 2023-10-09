import LayoutView from "./layout";
import ProductView from "./product";

class View {
	constructor() {
		this.layout = new LayoutView();
		this.product = new ProductView();
	}
}

export default View;
