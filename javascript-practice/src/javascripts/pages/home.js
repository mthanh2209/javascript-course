import HomeController from "../controllers/home";
import ProductModel from "../models/product";
import CategoryModel from "../models/category";
import CartModel from "../models/cart";
import ProductView from "../views/product";
import LayoutView from "../views/layout";

new HomeController(
	new ProductModel(),
	new CategoryModel(),
	new CartModel(),
	new ProductView(),
	new LayoutView(),
);
