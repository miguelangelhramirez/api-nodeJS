import {DataSource} from 'typeorm';
import { Product } from '../modules/products/entities/Products'; 
import { Rol } from '../modules/roles/entities/Roles';
import { Usuario } from '../modules/users/entities/Users';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "crud_node",
    synchronize: true,
    logging: true,
    entities: [Product, Rol, Usuario],
    subscribers: [],
    migrations: [],
})