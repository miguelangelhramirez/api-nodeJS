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
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const db_1 = require("../src/db/db");
const productosHelpers_1 = require("./productosHelpers");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.AppDataSource.initialize();
    console.log("Database connected for tests");
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.AppDataSource.destroy();
}));
(0, globals_1.describe)("GET api/products/", () => {
    let createdProduct;
    let nonExistingId = -1;
    it('responds with a status 201 code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, productosHelpers_1.createProductMother)();
        (0, globals_1.expect)(response.status).toBe(201);
    }));
    it('responds with a status 200 code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/api/products/');
        (0, globals_1.expect)(response.status).toBe(200);
    }));
    it('responds with a json', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/api/products/');
        (0, globals_1.expect)(response.headers['content-type']).toEqual(globals_1.expect.stringContaining('json'));
        (0, globals_1.expect)(response.body.data).toBeInstanceOf(Array);
    }));
    it('responds with a existing product', () => __awaiter(void 0, void 0, void 0, function* () {
        createdProduct = yield (0, productosHelpers_1.createProductMother)();
        const getResponse = yield (0, supertest_1.default)(app_1.default).get(`/api/products/${createdProduct.body.data.id}`);
        (0, globals_1.expect)(getResponse.status).toBe(200);
        (0, globals_1.expect)(getResponse.body).toHaveProperty('data');
        (0, globals_1.expect)(getResponse.body.data).toHaveProperty('id', createdProduct.body.data.id);
    }));
    it('responds with a 404 status non existing product', () => __awaiter(void 0, void 0, void 0, function* () {
        const getResponse = yield (0, supertest_1.default)(app_1.default).get(`/api/products/${nonExistingId}`);
        (0, globals_1.expect)(getResponse.status).toBe(404);
    }));
});
