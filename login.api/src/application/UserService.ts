import { IUser, User } from "../core/entities/User";
import { IUserService } from "../core/interfaces/IUserService";

export class UserService implements IUserService {

    createUser(userModel: IUser) {
        let user = new User(userModel);

        //banco de dados salva o user que eu criei
    }

}