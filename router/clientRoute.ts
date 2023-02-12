import { Router } from "express";

import {
  registerValidation,
  loginValidation,
} from "../middlewares/validations/client/clientValidation";

import { register } from "../controller/client/clientAuth";

const clientAuthRouter = Router();

clientAuthRouter.route("/signup").post(registerValidation, register);

export default clientAuthRouter;
