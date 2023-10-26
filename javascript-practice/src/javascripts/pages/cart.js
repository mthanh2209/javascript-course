import CartController from "../controllers/cart";
import CartModel from './../models/cart';
import CartView from "../views/cart";

new CartController(new CartModel(), new CartView());
