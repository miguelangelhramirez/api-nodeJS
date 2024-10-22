"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userController = new user_controller_1.UserController();
        //router.get("/", productController.getProducts)
        //router.get("/:id", productController.getProduct)
        router.post("/create", userController.createUsuario);
        //router.post("/update/:id", ValidateProduct, (req, res) => productController.updateProduct(req, res))
        return router;
    }
}
exports.UserRoutes = UserRoutes;
