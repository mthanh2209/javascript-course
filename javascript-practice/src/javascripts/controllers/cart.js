import { STATE } from "../constants";
import { ERROR_MESSAGE } from "../constants/messages";
import ProductController from "./product";

export default class CartController extends ProductController {
  constructor(cartView) {
    super();
    this.cartView = cartView;

    this.init();
  }

  init = async () => {
    await this.handleDisplayCart();
    this.cartView.setupItemEvent(this.cartModel.updateProductQuantity);
  };

  /**
   * Handle the display of the shopping cart by fetching product data and cart items.
   */
  handleDisplayCart = async () => {
    try {
      const product = await this.productModel.getProductList();
      const cart = this.cartModel.getProduct(product);
      this.cartView.displayCart(cart, product);
    } catch (error) {
      this.toastNotificationView.showToastNotification(STATE.FAILED, ERROR_MESSAGE.LOAD_ERROR)
    }
  };
}
