import searchIcon from "../../assets/icons/search.svg";
import closeIcon from "../../assets/icons/close.svg";
import menuIcon from "../../assets/icons/menu.svg";
import cartIcon from "../../assets/icons/shopping-cart.svg";
import userIcon from "../../assets/icons/user-avatar.svg";

class Header {
  constructor() { }

  /**
   * HTML template for rendering the header.
   * @param {Array} data - An array of category data to be used in the header.
   *	{
   *		"id": 1 - id of category,
   *		"name": "Plant pots - name of category"
   *	}
   * @returns {string} HTML markup for the header.
   */
  static renderHeader = (data) => {
    return `
		<div class="top-nav">
		<div class="header-search">
			<img class="search-icon" src="${searchIcon}" alt="icon search" />
			<img class="close-icon" src="${closeIcon}" alt="icon close" />
		</div>
		<div class="search-box">
			<input class="search-input" type="text" placeholder="Search here ">
		</div>
		<a class="nav-link" href="index.html">
        <h3 class="nav-text">Avion</h3>
    </a>
		<div class="nav-menu">
			<img class="menu-icon" src="${menuIcon}" alt="icon menu" />
			<div class="menu-toggle">
				<span class="cart-number"></span>
				<img class="cart-icon" src="${cartIcon}" alt="icon cart" />
				<img class="avatar-icon" src="${userIcon}" alt="icon avatar" />
			</div>
		</div>
	</div>
	<nav>
		<ul class="list-categories">
			${data
        .map(
          (item, index) => `<li key="${index}">
					<a class="item-categories" href="javascript:void(0)">${item.name}</a>
				</li>`,
        )
        .join(" ")}
		</ul>
	</nav>`;
  };
}

export default Header;
