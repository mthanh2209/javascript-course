import View from "./views/view";
import Model from "./models/model";
import Controller from "./controllers/controller";

class App {
	constructor() { }

	start() {
		new Controller(new Model(), new View());
	}
}

export default App
