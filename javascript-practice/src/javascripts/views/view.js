import LayoutView from "./layoutView";
import ProductView from "./productView";

class View {
	constructor() {
		this.layoutView = new LayoutView();
		this.productView = new ProductView();
	}
}

export default View;
