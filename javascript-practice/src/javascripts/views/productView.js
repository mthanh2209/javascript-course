class ProductView {
	constructor() {
		this.searchEl = document.querySelector('.search-icon');
		this.closeEl = document.querySelector('.close-icon');
		this.searchProduct = document.querySelector('.search-box');
	}

	// Function to handle click event on the search icon
	onSearchClick() {
		this.searchProduct.classList.add('active');
		this.closeEl.classList.add('active');
		this.searchEl.classList.add('active');
	}

	// Function to handle click event on the close icon
	onCloseClick() {
		this.searchProduct.classList.remove('active');
		this.closeEl.classList.remove('active');
		this.searchEl.classList.remove('active');
	}

	// Function to set up event listeners for search functionality
	searchingProducts() {
		this.searchEl.addEventListener('click', this.onSearchClick.bind(this));
		this.closeEl.addEventListener('click', this.onCloseClick.bind(this));
	}
}

export default ProductView;
