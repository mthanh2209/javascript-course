import LayoutView from "./layout";
import CategoryView from "./category";

class View {
	constructor() {
		this.layout = new LayoutView();
		this.category = new CategoryView()
	}
}

export default View;
