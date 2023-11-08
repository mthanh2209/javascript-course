import LayoutController from "./layout";
import ProductModel from './../models/product';
import ProductView from './../views/product';
import { STATE } from "../constants";
import { ERROR_MESSAGE } from "../constants/messages";

export default class ProductController extends LayoutController {
	constructor() {
		super()
		this.productModel = new ProductModel()
		this.productView = new ProductView()

		this.init()
	}

	init = async () => {
		await this.handleRenderProduct()
		this.initFindProduct()

		this.productView.addEventSwitchPage();
		this.productView.addEventMoreProduct();
		this.productView.addEventFilters();
	}
	/**
	 * Get the product list from model
	 * Then execute renderProduct method in view
	 */
	async handleRenderProduct() {
		try {
			const products = await this.productModel.getProductList();
			this.productView.renderProduct(products);
		} catch (error) {
			this.toastNotificationView.showToastNotification(STATE.FAILED, ERROR_MESSAGE.LOAD_ERROR)
		}
	}
	/**
	 * Initialize functionality to find products.
	 */
	initFindProduct = () => {
		this.productView.addEventFindProduct(this.findProduct);
		this.productView.addEventEnter(this.findProduct);
	};

	/**
	 * Find products based on search data.
	 *
	 * @param {string} searchData - The search data to filter products by title.
	 * @returns {Promise<Object[]>} A promise that resolves with the filtered products.
	 */
	findProduct = async (searchData) => {
		try {
			return await this.productModel.findProduct(searchData);
		} catch (error) {
			this.toastNotificationView.showToastNotification(STATE.FAILED, ERROR_MESSAGE.LOAD_ERROR)
		}
	};
}
