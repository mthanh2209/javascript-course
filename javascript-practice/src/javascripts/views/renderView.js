class RenderView {
	constructor(loadHeaderFooter) {
		this.loadHeaderFooter = loadHeaderFooter;
	}

	renderHeader = (data) => {
		const header = document.querySelector(".main-header");
		header.innerHTML = data;
	}

	renderFooter = (data) => {
		const footer = document.querySelector(".main-footer");
		footer.innerHTML = data;
	}
}

export default RenderView;
