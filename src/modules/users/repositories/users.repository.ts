import { AppDataSource } from "../../../db/db";
import { UserDTO } from "../DTO/userDTO";
import { Usuario } from "../entities/Users";

export class userRepository {

    private userRepository = AppDataSource.getRepository( Usuario );

    constructor() {

    }

    async createUsuario(data: UserDTO): Promise<Usuario> {

        const user = this.userRepository.create({...data, rol: data.rolId});

        return await this.userRepository.save(user);

    }

}