import { UserDTO } from "../DTO/userDTO";
import { userRepository } from "../repositories/users.repository";

export class UserService {

    private userRepository = new userRepository();

    constructor() {}

    async createUser(data: UserDTO) {

        return await this.userRepository.createUsuario(data);
        
    }

}