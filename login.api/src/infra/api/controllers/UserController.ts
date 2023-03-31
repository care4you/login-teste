import { UserService } from "../../../application/UserService";
import { IUserService } from "../../../core/interfaces/IUserService";
import { Request, Response } from "express";


export class UserController {
    private userService: IUserService;

    constructor() 
    {
        this.userService = new UserService();
    }

    createUser = (req: Request, res: Response) => {
        // this.userService.createUser(req.body);

        res.status(201).send("Hello World");
    }
}

export default new UserController();