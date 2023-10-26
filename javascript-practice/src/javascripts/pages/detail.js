import DetailController from "../controllers/detail";
import CartModel from "../models/cart";
import DetailView from "../views/detail";

new DetailController(new CartModel(), new DetailView());
