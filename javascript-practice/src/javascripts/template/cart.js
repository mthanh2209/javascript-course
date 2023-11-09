class CartTemplate {
  constructor() { }

  /**
   * Renders a cart item with the provided data.
   * @param {Object} data - The data for the cart item.
   * @param {Object} data.product - The product data.
   * @param {string} data.product.image - The image URL of the product.
   * @param {string} data.product.title - The title of the product.
   * @param {string} data.product.description - The description of the product.
   * @param {number} data.product.price - The price of the product.
   * @param {number} data.quantity - The quantity of the product in the cart.
   * @returns {string} - The HTML representation of the cart item.
   */
  static renderCart = (data) => {
    return `
		 <tr class="table-body">
		<td class="body-content">
			<img class="body-img" src=${data.product.image} alt=${data.product.title} />
			<div>
				<h5 class="body-text">${data.product.title}</h5>
				<p class="body-desc">
					${data.product.description}
				</p>
				<span class="body-per">£${data.product.price}</span>
				<div class="stepper stepper-mobile">
					<button class="decrement">-</button>
					<input type="number" class="quantity" value=${data.quantity ?? 1} readonly />
					<button class="increment">+</button>
				</div>
			</div>
		</td>
		<td class="body-stepper">
			<div class="stepper stepper-desktop">
				<button class="decrement">-</button>
				<input type="number" class="quantity" value=${data.quantity ?? 1} readonly />
				<button class="increment">+</button>
			</div>
		</td>
		<td class="body-total">
			<span class="total-per">${data.product.price * (data.quantity ?? 1)}</span>
		</td>
		  </tr>
				`;
  };
}

export default CartTemplate;
