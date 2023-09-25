/**
 * Message for alert the error while fetching or rendering.
 */
export const ERROR_MESSAGE = {
	GET_PPRODUCT_LIST: "Server error! Couldn't load product list",
	GET_CATEGORY_LIST: "Server error! Couldn't load category list",

	ADD_CART: "Couldn't add to cart",

	SERVER_ERROR: "Server Error! Please try again later",
};

/**
 * Message for alert if the action be done successfully.
 */
export const SUCCESS_MESSAGE = {
	ADD_CART: "Add to cart successfully",
};

/**
 * Constants for request state.
 */
export const REQUEST_STATE = {
	SUCCESS: "success",
	FAILED: "failed",
};

/**
 * Default values for initialization.
 */
export const DEFAULT_VALUES = {
	EMPTY_STRING: "",
	EMPTY_ARRAY: [],
};

/**
 * Constants for API request methods.
 */
export const API_REQUEST = {
	GET: "GET",
	POST: "POST",
	DELETE: "DELETE",
	PATCH: "PATCH",
};

/**
 * Paths for different pages in the application.
 */
export const PATHS = {
	HOME: "index.html",
	ROOT: "/",
	DETAIL: "/detail.html",
	PRODUCT_LISTING: "/product-listing.html",
	SHOPPING_CART: "/shopping-cart.html"
};
