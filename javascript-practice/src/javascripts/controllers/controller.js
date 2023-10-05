import View from "../views/view";
import Model from "../models/model";

export default class Controller {
	constructor() {
		this.view = new View();
		this.model = new Model();
	}
}
