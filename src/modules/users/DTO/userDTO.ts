import { Rol } from "../../roles/entities/Roles";

export interface UserDTO {
    id: number;
    nombre: string;
    documento: number;
    email: string;
    username: string;
    password: string;
    activo: number;
    rolId: Rol;
}