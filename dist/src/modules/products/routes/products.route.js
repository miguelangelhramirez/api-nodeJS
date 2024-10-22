"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const products_controller_1 = require("../controllers/products.controller");
const express_1 = require("express");
const validateProduct_1 = require("../middlewares/validateProduct");
class ProductsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const productController = new products_controller_1.productsController();
        router.get("/", productController.getProducts);
        router.get("/:id", productController.getProduct);
        router.post("/create", validateProduct_1.ValidateProduct, (req, res) => productController.createProduct(req, res));
        router.post("/update/:id", validateProduct_1.ValidateProduct, (req, res) => productController.updateProduct(req, res));
        return router;
    }
}
exports.ProductsRoutes = ProductsRoutes;
