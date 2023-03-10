import { Router } from "express";
import {
  adminToOneUser,
  populateMsg,
} from "../controller/admin/dashboard/adminMsgController";

const adminDashboardRoutes = Router();

//sending messages from admin to one user
adminDashboardRoutes.post(
  "/adminmsg/:userId/:adminId/:adminDashboard",
  adminToOneUser
);

adminDashboardRoutes.get("/messages/:dashBoardId", populateMsg);

export default adminDashboardRoutes;
