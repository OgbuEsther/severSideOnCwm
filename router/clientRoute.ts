import { Router } from "express";

import {
  registerValidation,
  loginValidation,
} from "../middlewares/validations/client/clientValidation";

import { getAll, login, register } from "../controller/client/clientAuth";

const clientAuthRouter = Router();

clientAuthRouter.route("/signup").post(registerValidation, register);
clientAuthRouter.route("/login").post(loginValidation, login);
clientAuthRouter.route("/").get(getAll);

export default clientAuthRouter;
