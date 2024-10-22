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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductMother = void 0;
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const createProductMother = () => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = {
        "nombre": "Producto Testing",
        "referencia": "productoTest2024",
        "precio": 9999,
        "peso": 1,
        "categoria": "test",
        "stock": 99,
        "activo": 1
    };
    const response = yield (0, supertest_1.default)(app_1.default).post('/api/products/create').send(newProduct);
    if (response.status !== 201) {
        throw new Error('Error al crear producto de prueba');
    }
    return response;
});
exports.createProductMother = createProductMother;
module.exports = { createProductMother: exports.createProductMother };
