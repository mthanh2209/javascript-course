import CartTemplate from "../template/cart";

export default class CartView {
  constructor() {
    this.cartSection = document.querySelector(".cart-table");
    this.subtotalEl = document.querySelector(".subtotal");
  }

  /**
   * Display the shopping cart with the provided cart items and product data.
   *
   * @param {Array} cart - An array of cart items.
   * @param {Array} product - An array of product data.
   */
  displayCart(cart, product) {
    if (cart.length === 0) {
      this.cartSection.innerHTML = `<h4>Your cart is empty.</h4>`;
    } else {
      const cartItemsHTML = cart
        .map((item, index) =>
          CartTemplate.renderCart({
            item,
            quantity: cart[index].quantity,
            product: product.find((p) => p.id === item.id),
          }),
        )
        .join("");
      this.cartSection.innerHTML = `
			<tr class="table-header">
				<th class="header-text">Product</th>
				<th class="header-text">Quantity</th>
				<th class="header-text">Total</th>
			</tr>
			${cartItemsHTML}`;

      const subtotal = cart.reduce((total, item) => {
        const productItem = product.find((p) => p.id === item.id);
        return (
          total + (productItem ? productItem.price : 0) * (item.quantity ?? 1)
        );
      }, 0);
      this.subtotalEl.textContent = `£${subtotal}`;
    }
  }

  /**
   * Set up event handlers for +/- buttons in the cart section.
   * @param {function} handler - The function to handle increment and decrement actions.
   */
  setupItemEvent(updateQuantity) {
    this.cartSection.addEventListener("click", (event) => {
      if (event.target.classList.contains("increment")) {
        this.handleIncrementAndDecrement(event.target, true, updateQuantity);
      } if (event.target.classList.contains("decrement")) {
        this.handleIncrementAndDecrement(event.target, false, updateQuantity);
      }
    });
  }

  /**
   * Handle an increment or decrement action for an item in the cart.
   *
   * @param {HTMLElement} button - The increment or decrement button element.
   * @param {boolean} isIncrement - True if it's an increment action, false for decrement.
   * @param {function} updateQuantity - The function to handle the increment or decrement action.
   */
  handleIncrementAndDecrement(button, isIncrement, updateQuantity) {
    // Find the associated quantity input and update its value
    const quantityInput = button.parentElement.querySelector(".quantity");
    let oldquantity = quantityInput.value
    let newValue;

    if (isIncrement) {
      newValue = parseFloat(quantityInput.value) + 1;
    } else {
      newValue = parseFloat(quantityInput.value) - 1;
    }

    if (newValue >= 1) {
      const cartItemId = button.closest('.table-body').dataset.id
      updateQuantity(cartItemId, oldquantity, newValue)
      quantityInput.value = newValue;

      // Update the total-per for this item
      const itemRow = button.closest(".table-body");
      const productPrice = parseFloat(
        itemRow.querySelector(".body-per").textContent.replace("£", ""),
      );
      const newTotal = productPrice * parseFloat(quantityInput.value);
      itemRow.querySelector(".total-per").textContent = `£${newTotal}`;

      // Recalculate the subtotal and update the display
      this.updateSubtotal();
    }
  }

  /**
   * Update the subtotal for the shopping cart and refresh the display.
   */
  updateSubtotal() {
    const totalPerElements = this.cartSection.querySelectorAll(".total-per");
    let subtotal = 0;

    totalPerElements.forEach((totalPerElement) => {
      subtotal += parseFloat(totalPerElement.textContent.replace("£", ""));
    });

    this.subtotalEl.textContent = `£${subtotal}`;
  }
}
