import LayoutView from "./layoutView";
import ProductView from "./product";

class View {
	constructor() {
		this.layoutView = new LayoutView();
		this.productView = new ProductView();
	}
}

export default View;
