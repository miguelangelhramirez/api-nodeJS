"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const products_route_1 = require("../modules/products/routes/products.route");
const user_route_1 = require("../modules/users/routes/user.route");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/products', products_route_1.ProductsRoutes.routes);
        router.use('/api/users', user_route_1.UserRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
