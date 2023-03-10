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

const adminAuthRoutes = Router();

adminAuthRoutes.route("/admin/signin").post(adminLogin);
adminAuthRoutes.route("/admin/register").post(adminRegister);
adminAuthRoutes.route("/admin/").get(getAllAdmin);

export default adminAuthRoutes;
