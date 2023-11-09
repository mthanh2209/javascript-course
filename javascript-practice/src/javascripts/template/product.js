import { DETAIL_PAGE } from "../constants/url";

class ProductTemplate {
  constructor() { }

  /**
   * Render a product detail template based on the provided data.
   * @param {Array} data - An array of product detail data objects.
   * @param {number} id - The unique identifier of the product.
   * @param {string} title - The name of the product.
   * @param {number} price - The price of the product.
   * @param {string} description - A description of the product.
   * @param {number} categoryId - The category ID to which the product belongs.
   * @param {object} dimension - The dimensions of the product.
   * @param {string} dimension.height - The height of the product.
   * @param {string} dimension.width - The width of the product.
   * @param {string} dimension.depth - The depth of the product.
   * @param {string} image - The URL of the product's image.
   * @returns {string} - The HTML template representing the product detail.
   */

  static renderProduct = (data) => {
    return `
		${data.map((item) => `
			<a href="${DETAIL_PAGE}?id=${item.id}" style="text-decoration: none">
				<li class="product-items" value="${item.categoryId}" data-id="${item.id}">
					<img class="products-img" src="${item.image}" alt="${item.title}">
					<h4>${item.title}</h4>
					<p class="products-per">£${item.price}</p>
				</li>
			</a>`
    ).join(" ")}`
  }

  static renderProductDetail = (data) => {
    return `
		${data.map((item) => `
			<img class="detail-img" src="${item.image}" alt="${item.title}"/>
			<div class="container detail-content">
				<h3 class="detail-title">${item.title}</h3>
				<h4 class="detail-per">£${item.price}</h4>
				<div class="detail-desc">
					<h5 class="desc-title">Description</h5>
					<p class="desc-text">${item.description}</p>
					<ul class="desc-list">
						<li class="desc-item">Premium material</li>
						<li class="desc-item">Handmade upholstery</li>
						<li class="desc-item">Quality timeless classic</li>
					</ul>
				</div>
				<div>
					<h5 class="desc-title">Dimensions</h5>
					<table class="desc-table">
						<tr>
							<th class="dimension-text">Height</th>
							<th class="dimension-text">Width</th>
							<th class="dimension-text">Depth</th>
						</tr>
						<tr>
							<td class="dimension-number">${item.dimension ? item.dimension.height : ''}</td>
							<td class="dimension-number">${item.dimension ? item.dimension.width : ''}</td>
							<td class="dimension-number">${item.dimension ? item.dimension.depth : ''}</td>
						</tr>
					</table>
				</div>
				<div class="desc-quantity">
					<h5 class="desc-title">Quantity</h5>
					<div class="desc-button">
						<button class="decrement">-</button>
						<input type="number" class="quantity" value="1" readonly />
						<button class="increment">+</button>
					</div>
					<div class="detail-btn">
						<button class="btn primary-btn add-to-cart-btn">Add to cart</button>
					</div>
				</div>
			</div>`).join(" ")}`;
  };
}

export default ProductTemplate;
