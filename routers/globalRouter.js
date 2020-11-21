// for express
import express from "express";
// for function controller
import { join, login, logout } from "../controller/userController";
import { home, search } from "../controller/videoController";
// to get router from external routers file
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
