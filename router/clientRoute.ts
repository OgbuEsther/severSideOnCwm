import { Router } from "express";

import {
  registerValidation,
  loginValidation,
} from "../middlewares/validations/client/clientValidation";

import { getAll, loginClient, signUp } from "../controller/client/clientAuth";

const clientAuthRouter = Router();

clientAuthRouter.route("/signup").post(signUp);
clientAuthRouter.route("/login").post(loginClient);
clientAuthRouter.route("/").get(getAll);

export default clientAuthRouter;
