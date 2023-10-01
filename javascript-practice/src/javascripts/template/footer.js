import linkedinLogo from "../../assets/icons/logo-linkedin.svg";
import facebookLogo from "../../assets/icons/logo-facebook.svg";
import instagramLogo from "../../assets/icons/logo-instagram.svg";
import skypeLogo from "../../assets/icons/logo-skype.svg";
import twitterLogo from "../../assets/icons/logo-twitter.svg";
import pinterestLogo from "../../assets/icons/logo-pinterest.svg";

class Footer {
	constructor() {}

	/**
	 * HTML template for rendering the footer.
	 * @returns {HTMLElement} HTML element for the footer.
	 */
	static renderFooter = (data) => {
		return `
		<div class="container">
		<div class="footer-wrapper">
			<nav class="footer-nav">
				<section class="footer-link">
					<p class="title-link">Categories</p>
					<ul class="list-link">
						${data
							.map(
								(item, index) =>
									`<li key="${index}" class="item-link">${item.name}</li>`,
							)
							.join(" ")}
					</ul>
				</section>

				<section class="footer-link">
					<p class="title-link">Menu</p>
					<ul class="list-link">
						<li class="item-link">New arrivals</li>
						<li class="item-link">Best sellers</li>
						<li class="item-link">Recently viewed</li>
						<li class="item-link">Popular this week</li>
						<li class="item-link">All products</li>
					</ul>
				</section>

				<section class="footer-link">
					<p class="title-link">Our company</p>
					<ul class="list-link">
						<li class="item-link">About us</li>
						<li class="item-link">Vacancies</li>
						<li class="item-link">Contact us</li>
						<li class="item-link">Privacy</li>
						<li class="item-link">Returns policy</li>
					</ul>
				</section>
			</nav>
			<section class="footer-register">
				<p class="title-register">Join our mailing list</p>
				<form class="form-register">
					<input class="form-input" type="text" placeholder="your@email.com" />
					<button class="btn secondary-btn form-button">Sign up</button>
				</form>
			</section>
		</div>

		<nav class="footer-copyright">
			<p class="copyright-title">Copyright 2022 Avion LTD</p>
			<ul class="social-icon">
				<li><img src="${linkedinLogo}" alt="img logo" /></li>
				<li><img src="${facebookLogo}" alt="img logo" /></li>
				<li><img src="${instagramLogo}" alt="img logo" /></li>
				<li><img src="${skypeLogo}" alt="img logo" /></li>
				<li><img src="${twitterLogo}" alt="img logo" /></li>
				<li><img src="${pinterestLogo}" alt="img logo" /></li>
			</ul>
		</nav>
	</div>
    `;
	};
}

export default Footer;
