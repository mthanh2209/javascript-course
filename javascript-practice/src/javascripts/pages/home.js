import HomeController from "../controllers/home";
import CategoryModel from "../models/category";
import ProductModel from "../models/product";
import LayoutView from "../views/layout";
import ProductView from "../views/product";

new HomeController(new CategoryModel(), new ProductModel(), new LayoutView(), new ProductView());
