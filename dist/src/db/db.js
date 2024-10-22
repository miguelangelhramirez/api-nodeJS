"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Products_1 = require("../modules/products/entities/Products");
const Roles_1 = require("../modules/roles/entities/Roles");
const Users_1 = require("../modules/users/entities/Users");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "crud_node",
    synchronize: true,
    logging: true,
    entities: [Products_1.Product, Roles_1.Rol, Users_1.Usuario],
    subscribers: [],
    migrations: [],
});
