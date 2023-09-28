import searchIcon from "../../assets/icons/search.svg"
import closeIcon from "../../assets/icons/close.svg"
import menuIcon from "../../assets/icons/menu.svg"
import cartIcon from "../../assets/icons/shopping-cart.svg"
import userIcon from "../../assets/icons/user-avatar.svg"

class Header {
	constructor() { }

	/**
	 * HTML template for rendering the header.
	 * @returns {HTMLElement} HTML element for the header.
	 */
	renderHeader = () => (
		`
		<div class="top-nav">
		<div class="header-search">
			<img class="search-icon" src="${searchIcon}" alt="icon search" />
			<img class="close-icon" src="${closeIcon}" alt="icon close" />
		</div>
		<div class="search-box">
			<input class="search-input" type="text" placeholder="Search here ">
		</div>
		<h1 class="nav-text">Avion</h1>
		<div class="nav-menu">
			<h2 class="menu-text">Welcome to furniture website</h2>
			<img class="menu-icon" src="${menuIcon}" alt="icon menu" />
			<div class="menu-toggle">
				<img class="cart-icon" src="${cartIcon}" alt="icon cart" />
				<img class="avatar-icon" src="${userIcon}" alt="icon avatar" />
			</div>
		</div>
	</div>
	<nav>
		<ul class="list-categories">
			<!-- TODO: dynamic UI -->
			<li>
				<a class="item-categories" href="javascript:void(0)">Plant pots</a>
			</li>
			<li>
				<a class="item-categories" href="javascript:void(0)">Ceramics</a>
			</li>
			<li>
				<a class="item-categories" href="javascript:void(0)">Tables</a>
			</li>
			<li>
				<a class="item-categories" href="javascript:void(0)">Chairs</a>
			</li>
			<li>
				<a class="item-categories" href="javascript:void(0)">Crockery</a>
			</li>
			<li>
				<a class="item-categories" href="javascript:void(0)">Tableware</a>
			</li>
			<li>
				<a class="item-categories" href="javascript:void(0)">Cutlery</a>
			</li>
		</ul>
	</nav>
    `
	);
}

export default Header;
