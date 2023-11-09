import { DETAIL_PAGE, PRODUCT_LISTING_PAGE } from "../constants/url";
import { FILTER_TYPE } from "../constants";
import { FILTER_STRATEGIES } from "../utilities";
import ProductTemplate from "../template/product";

class ProductView {
  constructor() {
    this.productsListing = document.querySelector(".products-listing");
    this.loadMoreButton = document.querySelector(".load-more-btn");
    this.viewCollectionButton = document.querySelectorAll(".view-collection-button");
    this.products = [];
    this.displayedProducts = 4;
    this.newProducts = 3;
  }

  /**
   * Render the specified products in the product listing element.
   * @param {Array} [products] - The array of products to render. If not provided, the existing products will be rendered.
   * @param {string} type - The filter type (FILTER_TYPE.CATEGORY or FILTER_TYPE.PRICE).
   */
  renderProduct = (products, type) => {
    if (type !== FILTER_TYPE) {
      this.products =
        products && Array.isArray(products) ? products : this.products;
      if (this.productsListing) {
        this.productsListing.innerHTML = "";

        this.products.slice(0, this.displayedProducts).forEach((product) => {
          this.productsListing.innerHTML += ProductTemplate.renderProduct([product]);
        });
        return;
      }
    }

    if (products) {
      if (this.productsListing) {
        this.productsListing.innerHTML = "";

        products.slice(0, this.displayedProducts).forEach((product) => {
          this.productsListing.innerHTML += ProductTemplate.renderProduct([product]);
        });
      }
    }
  };

  //----- EVENT LISTENER -----//

  /**
   * Add an event listener for loading more products.
   */
  handleMoreProduct = () => {
    if (this.loadMoreButton) {
      this.loadMoreButton.addEventListener("click", async (e) => {
        const newProducts = this.products.slice(
          this.displayedProducts,
          this.displayedProducts + this.newProducts,
        );
        this.displayedProducts += this.newProducts;
        this.renderProduct(null, newProducts);

        if (this.displayedProducts >= this.products.length) {
          this.loadMoreButton.style.display = "none";
        }
      });
    }
  };
  /**
   * Add an event listener for switching to the product listing page.
   */
  handleSwitchPage = () => {
    this.viewCollectionButton.forEach((button) => {
      button.addEventListener("click", () => {
        window.location.href = PRODUCT_LISTING_PAGE;
      });
    });
  };

  /**
   * Add an event listener for the find product button click.
   *
   * @param {Function} findProduct - The function to find products based on search input.
   */
  handleFindProduct = (findProduct) => {
    const searchEL = document.querySelector(".search-icon");
    if (searchEL) {
      searchEL.addEventListener("click", () =>
        this.handleFindProduct(findProduct),
      );
    }
  };

  /**
   * Add an event listener for the Enter key press in the search input field.
   * @param {Function} findProduct - The function to find products based on search input.
   */
  handleEnter = (findProduct) => {
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.handleFindProduct(findProduct);
        }
      });
    }
  };

  /**
   * Add event listeners for product filters.
   */
  handleFilters = () => {
    const categoryFilters = document.querySelectorAll('input[name="product-type"]');
    const priceFilters = document.querySelectorAll('input[name="price"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    categoryFilters.forEach((filter) => {
      filter.addEventListener("change", this.initializeFilters(FILTER_TYPE.CATEGORY));
    });

    priceFilters.forEach((filter) => {
      filter.addEventListener("change", this.initializeFilters(FILTER_TYPE.PRICE));
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.checked = false;
            }
          });
        }
      });
    });
  };

  /**
   * Render the found products in the product listing element.
   * @param {Array} products - The array of products to render.
   */
  renderFindProduct = (products) => {
    this.productsListing.innerHTML = "";

    products.forEach((product) => {
      this.createProductDOM(product);
    });
  };

  /**
   * Handle the find product event.
   * @param {Function} findProduct - The function to find products based on search input.
   */
  handleFindProduct = async (findProduct) => {
    const searchInput = document.querySelector(".search-input");
    let inputData = searchInput.value.toLowerCase();

    const isProduct = await findProduct(inputData);

    this.renderFindProduct(isProduct);
    searchInput.value = "";
  };

  /**
   * Initialize filters to the product list based on the filter type.
   * @param {string} type - The filter type (FILTER_TYPE.CATEGORY or FILTER_TYPE.PRICE).
   * @returns {Function} - An event handler function for filter changes.
   */
  initializeFilters = (type) => {
    return (e) => {
      const checked = e.target.checked;
      let filteredProducts;

      if (!checked) {
        filteredProducts = this.products;
        this.loadMoreButton.style.display = "block"
      } else {
        filteredProducts = FILTER_STRATEGIES[type](e.target, this.products);
        this.loadMoreButton.style.display = "none"
      }
      this.renderProduct(filteredProducts, FILTER_TYPE);
    }
  }
};



export default ProductView;
