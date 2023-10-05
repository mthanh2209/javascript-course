import View from "./views/view";
import Model from "./models/model";
import Controller from "./controllers/controller";

export function main() {
	const controller = new Controller(new Model(), new View());
}

main();
