import ProductTemplate from "../template/product";
import ProductView from "./product";

class DetailView extends ProductView {
	constructor() {
		super()
		this.detailSection = document.querySelector(".detail")
	}

	renderProductDetail(detail) {
		const urlParams = new URLSearchParams(window.location.search);
		const productId = parseInt(urlParams.get('id'));

		if (!isNaN(productId)) {
			const selectedProduct = detail.find((item) => item.id === productId);;

			if (selectedProduct) {
				const productDetailTemplate = ProductTemplate.renderProductDetail([selectedProduct]);
				this.detailSection.innerHTML = productDetailTemplate;
			}
		}
	}
}

export default DetailView;
