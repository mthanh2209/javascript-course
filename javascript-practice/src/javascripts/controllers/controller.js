class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	//-----LOAD HEADER AND FOOTER-----//
	init() {
		const headerFooterData = {
			header: this.model.getHeader(),
			footer: this.model.getFooter(),
		};

		this.view.connectedCallback(headerFooterData);
	}
}

export default Controller;
