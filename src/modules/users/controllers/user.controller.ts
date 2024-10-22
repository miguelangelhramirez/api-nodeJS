import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserDTO } from "../DTO/userDTO";

export class UserController {

    private userService = new UserService();
    //private userDTO: UserDTO

    constructor() {}

    public createUsuario = async (req:Request, res:Response) => {


        try {
            const userData:UserDTO = req.body;

            const user = await this.userService.createUser(userData);
            res.status(201).send({
                message:"Usuario creado",
                status: 201,
                data: user
            })
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            res.status(500).json({ message: "Error interno del servidor" });
            
        }

    }


}