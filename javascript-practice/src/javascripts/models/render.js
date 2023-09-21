class Render {
	constructor() { }

	async fetchHeaderData() {
		const res = await fetch("../../header.html");
		return await res.text();
	}

	async fetchFooterData() {
		const res = await fetch("../../footer.html");
		return await res.text();
	}
}

export default Render;
