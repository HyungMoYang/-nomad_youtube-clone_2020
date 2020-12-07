// for express
import express from "express";
// for function controller
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controller/userController";
import { home, search } from "../controller/videoController";
// to get router from external routers file
import routes from "../routes";

const globalRouter = express.Router();

// join router
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// login router
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
