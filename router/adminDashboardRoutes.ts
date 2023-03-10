import { Router } from "express";
import { adminToOneUser } from "../controller/admin/dashboard/adminMsgController";

const adminDashboardRoutes = Router();

//sending messages from admin to one user
adminDashboardRoutes.post(
  "/adminmsg/:userId/:adminId/:adminDashboard",
  adminToOneUser
);

export default adminDashboardRoutes;
