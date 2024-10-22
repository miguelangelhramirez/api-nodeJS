"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const product_service_1 = require("../services/product.service");
class productsController {
    constructor() {
        this.productService = new product_service_1.ProductService();
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const product = yield this.productService.createProductService(productData);
                res.status(201).send({
                    message: "Producto creado",
                    status: 201,
                    data: product
                });
            }
            catch (error) {
                console.error("Error al crear el producto:", error);
                res.status(500).json({ message: "Error interno del servidor" });
            }
        });
        this.getProducts = (_, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.findAllProductsService();
                res.status(200).send({
                    message: "Productos encontrados",
                    status: 200,
                    data: products
                });
            }
            catch (error) {
                res.status(500).send({
                    message: error
                });
            }
        });
        this.getProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let productID = parseInt(req.params.id);
            try {
                const product = yield this.productService.findProductByIdService(productID);
                if (!product) {
                    res.status(404).send({
                        message: "Producto no encontrado",
                        status: 404,
                        data: []
                    });
                }
                else {
                    res.status(200).send({
                        message: "Producto encontrado",
                        status: 200,
                        data: product
                    });
                }
            }
            catch (error) {
                res.status(500).send({
                    message: error
                });
            }
        });
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const product = yield this.productService.updateProductService(parseInt(req.params.id), productData);
                res.status(201).send({
                    message: "Producto actualizado",
                    status: 201,
                    data: product
                });
            }
            catch (error) {
                console.error("Error al actualizar el producto:", error);
                res.status(500).json({ message: "Error interno del servidor" });
            }
        });
    }
}
exports.productsController = productsController;
