import { Router } from "express";
import {
  adminToOneUser,
  populateMsg,
} from "../controller/admin/dashboard/adminMsgController";
import { createBills } from "../controller/admin/dashboard/AdminPostBills";

const adminDashboardRoutes = Router();

//sending messages from admin to one user
adminDashboardRoutes.post(
  "/adminmsg/:userId/:adminId/:adminDashboard",
  adminToOneUser
);

adminDashboardRoutes.get("/messages/:dashBoardId", populateMsg);

adminDashboardRoutes.post(
  "/createbills/:admindashBoardId/:clientDashBoardId",
  createBills
);

export default adminDashboardRoutes;
