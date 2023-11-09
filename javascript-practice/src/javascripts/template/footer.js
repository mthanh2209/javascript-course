import linkedinLogo from "../../assets/icons/logo-linkedin.svg";
import facebookLogo from "../../assets/icons/logo-facebook.svg";
import instagramLogo from "../../assets/icons/logo-instagram.svg";
import skypeLogo from "../../assets/icons/logo-skype.svg";
import twitterLogo from "../../assets/icons/logo-twitter.svg";
import pinterestLogo from "../../assets/icons/logo-pinterest.svg";

class Footer {
  constructor() { }

  /**
   * HTML template for rendering the footer.
   * @param {Array} data - An array of category data to be used in the footer.
   *	{
   *		"id": 1 - id of category,
   *		"name": "Plant pots" - name of category
   *	}
   * @returns {string} HTML markup for the footer.
   */
  static renderFooter = (data) => {
    return `
		<div class="container">
		<div class="footer-wrapper">
			<nav class="footer-nav">
				<section class="footer-link">
					<h5 class="title-link">Categories</h5>
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
					<h5 class="title-link">Menu</h5>
					<ul class="list-link">
						<li class="item-link">New arrivals</li>
						<li class="item-link">Best sellers</li>
						<li class="item-link">Recently viewed</li>
						<li class="item-link">Popular this week</li>
						<li class="item-link">All products</li>
					</ul>
				</section>

				<section class="footer-link">
					<h5 class="title-link">Our company</h5>
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
				<h5 class="title-register">Join our mailing list</h5>
				<form class="form-register">
					<input class="form-input" type="text" placeholder="your@email.com" />
					<button class="btn secondary-btn form-button" disabled>Sign up</button>
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
