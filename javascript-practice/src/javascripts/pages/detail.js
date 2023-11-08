import DetailController from "../controllers/detail";
import CartModel from "../models/cart";
import DetailView from "../views/detail";
import ToastNotificationView from "../views/toast";

new DetailController(new CartModel(), new DetailView(), new ToastNotificationView());
