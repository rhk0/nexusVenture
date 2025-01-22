import express from "express";
import { addToCart, getCart, removeFromCart, updateQuantityInCart } from "../controller/cartController.js";
import { updateProductController } from "../controller/productController.js";
const router = express.Router();

// Route to add a product to the cart
router.post("/add", addToCart);

// Route to remove a product from the cart
router.post("/remove/:productId",  removeFromCart);

// Route to get the user's cart
router.get("/get", getCart);
router.put("/update/:id",updateQuantityInCart)

export default router;
