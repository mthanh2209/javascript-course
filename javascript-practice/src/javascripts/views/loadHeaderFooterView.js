class LoadHeaderFooterView {
	constructor() {
	}

	displayHeader(header) {
		this.container.innerHTML += `
		<header class="main-header">
		<div class="top-nav">
			<div class="header-search">
				<img class="search-icon" src="assets/icons/search.svg" alt="icon search" />
				<img class="close-icon" src="assets/icons/close.svg" alt="icon close" />
			</div>
			<div class="search-box">
				<input class="search-input" type="text" placeholder="Search here ">
			</div>
			<h1 class="nav-text">Avion</h1>
			<div class="nav-menu">
				<h1 class="menu-text">Welcome to furniture website</h1>
				<img class="menu-icon" src="assets/icons/menu.svg" alt="icon menu" />
				<div class="menu-toggle">
					<img class="cart-icon" src="assets/icons/shopping-cart.svg" alt="icon cart" />
					<img class="avatar-icon" src="assets/icons/user-avatar.svg" alt="icon avatar" />
				</div>
			</div>
		</div>
		<div class="header-line"></div>
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
	</header>
    `;
	}

	displayFooter(footer) {
		this.container.innerHTML += `
		<footer class="main-footer">
		<div class="container">
			<div class="footer-wrapper">
				<nav class="footer-nav">
					<div class="footer-link">
						<p class="title-link">Categories</p>
						<ul class="list-link">
							<!-- TODO: dynamic UI -->
							<li class="item-link">Crockery</li>
							<li class="item-link">Furniture</li>
							<li class="item-link">Homeware</li>
							<li class="item-link">Plant pots</li>
							<li class="item-link">Chairs</li>
							<li class="item-link">Crockery</li>
						</ul>
					</div>

					<div class="footer-link">
						<p class="title-link">Menu</p>
						<ul class="list-link">
							<li class="item-link">New arrivals</li>
							<li class="item-link">Best sellers</li>
							<li class="item-link">Recently viewed</li>
							<li class="item-link">Popular this week</li>
							<li class="item-link">All products</li>
						</ul>
					</div>

					<div class="footer-link">
						<p class="title-link">Our company</p>
						<ul class="list-link">
							<li class="item-link">About us</li>
							<li class="item-link">Vacancies</li>
							<li class="item-link">Contact us</li>
							<li class="item-link">Privacy</li>
							<li class="item-link">Returns policy</li>
						</ul>
					</div>
				</nav>
				<div class="footer-register">
					<p class="title-register">Join our mailing list</p>
					<div class="form-register">
						<input class="form-input" type="text" placeholder="your@email.com" />
						<button class="btn secondary-btn form-button">Sign up</button>
					</div>
				</div>
			</div>
			<div class="footer-line"></div>

			<div class="footer-copyright">
				<p class="copyright-title">Copyright 2022 Avion LTD</p>
				<ul class="social-icon">
					<li><img src="assets/icons/logo-linkedin.svg" alt="img logo" /></li>
					<li><img src="assets/icons/logo-facebook.svg" alt="img logo" /></li>
					<li><img src="assets/icons/logo-instagram.svg" alt="img logo" /></li>
					<li><img src="assets/icons/logo-skype.svg" alt="img logo" /></li>
					<li><img src="assets/icons/logo-twitter.svg" alt="img logo" /></li>
					<li><img src="assets/icons/logo-pinterest.svg" alt="img logo" /></li>
				</ul>
			</div>
		</div>
	</footer>
    `;
	}

	connectedCallback(model) {
		this.displayHeader(model.header);
		this.displayFooter(model.footer);

		document.body.appendChild(this.container);
	}
}

export default LoadHeaderFooterView;
