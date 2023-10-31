import Header from "../template/header";
import Footer from "../template/footer";
import { SHOPPING_CART_PAGE } from "../constants/url";

class LayoutView {
	constructor() {
		this.headerEl = document.querySelector(".main-header");
		this.footerEl = document.querySelector(".main-footer");
	}

	/**
	 * Renders the header and footer elements.
	 * This function fetches the list of categories from the API and renders the header
	 * and footer templates using the retrieved data.
	 * @param {Array} categories - The list of categories to be displayed in the header and footer.
	 */
	renderLayout = (categories) => {
		// Render the header and footer templates.
		const headerTemplate = Header.renderHeader(categories);
		const footerTemplate = Footer.renderFooter(categories);

		// Append the templates to their respective elements.
		this.headerEl.innerHTML = headerTemplate;
		this.footerEl.innerHTML = footerTemplate;
	};

	/**
	 * Add an event listener to the cart icon to navigate to the shopping cart page.
	 */
	addEventCartPage = () => {
		const cartIcon = document.querySelector(".cart-icon");
		cartIcon.addEventListener("click", (e) => {
			window.location.href = SHOPPING_CART_PAGE;
		});
	};

	/**
	 * Update the cart number in the header.
	 */
	updateCartNumber = (cartNumber) => {
		const cartNumberEl = document.querySelector(".cart-number");
		cartNumberEl.textContent = cartNumber;
	};

	/**
	 * Add event listeners for various icons in the layout
	 * such as search, close, and menu icons.
	 */
	addEventForIcons = () => {
		const searchIconElement = document.querySelector(".search-icon");
		const closeIconElement = document.querySelector(".close-icon");
		const menuIconElement = document.querySelector(".menu-icon");

		searchIconElement.addEventListener("click", this.handleIconClick);
		closeIconElement.addEventListener("click", this.handleIconClick);
		menuIconElement.addEventListener("click", this.handleIconClick);
	};

	/**
	 * Handle icon clicks for search, close, and menu icons.
	 * @param {Event} event - The click event.
	 */
	handleIconClick = (event) => {
		const searchIconElement = document.querySelector(".search-icon");
		const closeIconElement = document.querySelector(".close-icon");
		const searchBoxElement = document.querySelector(".search-box");
		const headerElement = document.querySelector("header");

		const iconElements = [
			{
				icon: searchIconElement,
				action: () => {
					searchBoxElement.classList.add("active");
					closeIconElement.classList.add("active");
					searchIconElement.classList.add("active");
				},
			},
			{
				icon: closeIconElement,
				action: () => {
					searchBoxElement.classList.remove("active");
					closeIconElement.classList.remove("active");
					searchIconElement.classList.remove("active");
				},
			},
			{
				icon: document.querySelector(".menu-icon"),
				action: () => {
					headerElement.classList.toggle("open");
				},
			},
		];

		for (const iconElement of iconElements) {
			if (event.target === iconElement.icon) {
				iconElement.action();
			}
		}

		const menuToggleElement = document.querySelector(".menu-toggle");
		if (
			!menuToggleElement.contains(event.target) &&
			!iconElements[2].icon.contains(event.target)
		) {
			headerElement.classList.remove("open");
		}
	};
}

export default LayoutView;
