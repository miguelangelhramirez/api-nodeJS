"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./router/router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const routes = router_1.AppRoutes.routes;
app.use(routes);
exports.default = app;