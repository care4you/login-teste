import { Router } from "express";
import userController from "../controllers/UserController";

const userRoutes: Router = Router();

userRoutes.post('/', userController.createUser);
userRoutes.post('/login',)

export default userRoutes;