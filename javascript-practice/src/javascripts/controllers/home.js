import ProductModel from './../models/product';
import CategoryModel from './../models/category';
import CartModel from '../models/cart';
import ProductView from './../views/product';
import LayoutView from './../views/layout';

export default class HomeController {
  constructor() {
    this.productModel = new ProductModel();
    this.categoryModel = new CategoryModel();
    this.cartModel = new CartModel();
    this.productView = new ProductView();
    this.layoutView = new LayoutView();

    this.init();
  }

  init = async () => {
    await this.handleRenderCategory();
    this.handleRenderProduct();
    this.initFindProduct();
    this.handleCartNumber();

    this.productView.addEventSwitchPage();
    this.productView.addEventMoreProduct();
    this.productView.addEventFilters();

    this.layoutView.addEventCartPage();
    this.layoutView.addEventForIcons();
  };

  /**
   * Get the category list from model
   * Then execute renderLayout method in view
   */
  async handleRenderCategory() {
    const categories = await this.categoryModel.getCategoryList();
    this.layoutView.renderLayout(categories);
  }

  /**
   * Get the product list from model
   * Then execute renderProduct method in view
   */
  async handleRenderProduct() {
    const products = await this.productModel.getProductList();
    this.productView.renderProduct(products);
  }

  handleCartNumber() {
    const cartNumber = this.cartModel.getProductsCount();
    this.layoutView.updateCartNumber(cartNumber);
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
    return await this.productModel.findProduct(searchData);
  };
}
