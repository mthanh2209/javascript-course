import ProductTemplate from "../template/product";
import { getURLSearchParam } from "../utilities";

class DetailView {
  constructor() {
    this.detailSection = document.querySelector(".detail");
  }

  /**
   * Render the product detail on the view.
   * @param {Object[]} detail - The product detail data to display.
   */
  renderProductDetail(detail) {
    const productId = getURLSearchParam("id");

    if (!isNaN(productId)) {
      const selectedProduct = detail.find((item) => item.id === productId);

      if (selectedProduct) {
        const productDetailTemplate = ProductTemplate.renderProductDetail([
          selectedProduct,
        ]);
        this.detailSection.innerHTML = productDetailTemplate;
      }
    }
  }

  /**
   * Handle adding a product to the shopping cart.
   * @param {function} callback - The callback function to execute when adding a product to the cart.
   */
  addToCart(callback) {
    const addToCartBtn = document.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", (e) => {
      const product = {
        id: getURLSearchParam("id"),
        quantity: e.target.closest(".desc-quantity").querySelector(".quantity")
          .value,
      };
      callback(product);
    });
  }

  /**
   * Update the cart number on the view.
   * @param {number} getCount - The number of products in the shopping cart.
   */
  updateCartNumber(getCount) {
    const cartNumber = document.querySelector(".cart-number");
    cartNumber.textContent = getCount;
  }

  /**
   * Setup event handlers for item increment and decrement buttons.
   */
  setupItemEvent() {
    const increment = document.querySelectorAll(".increment");
    const decrement = document.querySelectorAll(".decrement");
    const quantity = document.querySelectorAll(".quantity");

    increment.forEach((plusBtn, index) => {
      plusBtn.addEventListener("click", () => {
        quantity[index].value = parseFloat(quantity[index].value) + 1;
      });
    });

    decrement.forEach((minusBtn, index) => {
      minusBtn.addEventListener("click", () => {
        if (quantity[index].value > 1) {
          quantity[index].value = parseFloat(quantity[index].value) - 1;
        }
      });
    });
  }
}

export default DetailView;
