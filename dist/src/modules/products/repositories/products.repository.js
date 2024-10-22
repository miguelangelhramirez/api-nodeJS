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
exports.ProductRepository = void 0;
const db_1 = require("../../../db/db");
const Products_1 = require("../entities/Products");
class ProductRepository {
    constructor() {
        this.productRepository = db_1.AppDataSource.getRepository(Products_1.Product);
    }
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = this.productRepository.create(data);
            return yield this.productRepository.save(product);
        });
    }
    findAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.find();
        });
    }
    findProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.findOneBy({ id });
        });
    }
    updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.findProductById(id);
            if (!product)
                return null;
            Object.assign(product, data);
            return yield this.productRepository.save(product);
        });
    }
}
exports.ProductRepository = ProductRepository;
