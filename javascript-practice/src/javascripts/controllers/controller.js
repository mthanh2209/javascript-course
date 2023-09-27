class Controller {
	constructor(productView) {
		this.productView = productView;
	}

	init = () => {
		//Handling search product
		this.productView.onSearchClick();
		this.productView.onCloseClick();
		this.productView.searchingProducts();
	}
}

export default Controller;
