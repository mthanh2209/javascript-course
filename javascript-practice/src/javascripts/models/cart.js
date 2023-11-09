import { DATA_SOURCES } from "../constants";
import { getURLSearchParam } from "../utilities";
import Storage from "../utilities/storageHelper";

export default class CartModel {
  constructor() {
    this.productsInCart = Storage.getData(DATA_SOURCES.CART) ?? [];
  }

  /**
   * Update the cart data in local storage to synchronize it with the current state.
   */
  updateLocalStorage() {
    Storage.setData(DATA_SOURCES.CART, this.productsInCart);
    this.productsInCart = Storage.getData(DATA_SOURCES.CART);
  }

  /**
   * Update the quantity of a product in the shopping cart.
   * @param {string} productId - The ID of the product.
   * @param {number} oldQuantity - The previous quantity of the product.
   * @param {number} quantity - The new quantity of the product.
   */
  updateProductQuantity = (productId, oldQuantity, quantity) => {
    Storage.setData(DATA_SOURCES.CART, this.products.map(product => {
      if (Number(product.id) === Number(productId)) {
        product.quantity = product.quantity * 1 + quantity * 1 - oldQuantity * 1
      }
      return product
    }));
    this.products = Storage.getData(DATA_SOURCES.CART);
  }

  /**
   * Add a product to the shopping cart or update its quantity if it already exists.
   *
   * @param {Object} product - The product to add to the cart.
   * @returns {boolean} True if the product was successfully added or updated.
   */
  addToCart(product) {
    const productId = getURLSearchParam("id");
    const productInCart = this.productsInCart.find(
      (item) => item.id === productId);

    if (productInCart) {
      productInCart.quantity =
        Number(productInCart.quantity) + Number(product.quantity);
      this.updateLocalStorage();
      return true;
    }

    this.productsInCart.push(product);
    this.updateLocalStorage();
    return true;
  }

  /**
   * Get the productsInCart in the shopping cart.
   * @returns {Array} An array of productsInCart in the shopping cart.
   */
  getProduct() {
    return this.productsInCart;
  }

  /**
   * Get the total count of productsInCart in the shopping cart.
   * @returns {number} The total count of productsInCart in the shopping cart.
   */
  getProductsCount() {
    return this.productsInCart.length;
  }

  /**
   * Clear the shopping cart, removing all productsInCart.
   */
  clearCart() {
    this.productsInCart = [];
    Storage.removeData(DATA_SOURCES.CART);
  }
}
