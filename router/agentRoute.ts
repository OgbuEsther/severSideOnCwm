import { Router } from "express";

import {
  adminRegistervalidation,
  adminLoginvalidation,
} from "../middlewares/validations/admin/adminValidator";

import {
  adminLogin,
  adminRegister,
  getAllAdmin,
} from "../controller/admin/adminAuth";

const adminAuthRouter = Router();

adminAuthRouter.route("/admin/signin").post(adminLoginvalidation, adminLogin);
adminAuthRouter
  .route("/admin/register")
  .post(adminRegistervalidation, adminRegister);
adminAuthRouter.route("/admin/").get(getAllAdmin);

export default adminAuthRouter;
