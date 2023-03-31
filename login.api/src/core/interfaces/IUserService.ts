import { IUser } from "../entities/User";

export interface IUserService {
    createUser(user: IUser);
}