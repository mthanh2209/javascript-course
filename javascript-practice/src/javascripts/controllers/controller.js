class Controller {
	/**
	 * Constructor of Controller object
	 * @param {Object} model - The model component responsible for data management.
	 * @param {Object} view - The view component responsible for rendering UI elements.
	 */

	constructor(model, view) {
		//Initialize the Controller with a Model and View
		this.model = model;
		this.view = view;
	}

	//-----LOAD HEADER AND FOOTER-----//
	initHeaderFooter = async () => {
		try {
			const headerData = await this.model.render.fetchHeaderData();
			const footerData = await this.model.render.fetchFooterData();

			this.view.renderView.renderHeader(headerData);
			this.view.renderView.renderFooter(footerData);
		} catch (error) {
			console.error("Error loading header and footer:", error);
		}
	}

	//-----OTHER FEATURES-----//
}

export default Controller;
