import Controller from "./controllers/controller";
import Model from "./models/model";
import View from "./views/view";

export function main() {
	const controller = new Controller(new Model(), new View());
}

main();
