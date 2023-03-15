import { Router } from "express";
import {
  getMessages,
  sendMessage,
} from "../controller/client/AllDashboardLogics/messageController";
import {
  getAllDashboards,
  getOneDashboard,
  // newClientDashboard,
} from "../controller/client/clientController";

const clientDashBoardRoutes = Router();

// clientDashBoardRoutes.post("/new", newClientDashboard);
clientDashBoardRoutes.get("/", getAllDashboards);
clientDashBoardRoutes.get("/:id", getOneDashboard);

//messages
//send messages to admin
clientDashBoardRoutes.post(
  "/messages/:userId/:adminId/:dashboard",
  sendMessage
);

clientDashBoardRoutes.get("/getclientmessage/:clientId", getMessages);

export default clientDashBoardRoutes;
