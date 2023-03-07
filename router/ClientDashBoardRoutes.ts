import { Router } from "express";
import { sendMessage } from "../controller/client/AllDashboardLogics/messageController";
import {
  getAllDashboards,
  getOneDashboard,
  newClientDashboard,
} from "../controller/client/clientController";

const clientDashBoardRoutes = Router();

clientDashBoardRoutes.post("/new/:userId", newClientDashboard);
clientDashBoardRoutes.get("/", getAllDashboards);
clientDashBoardRoutes.get("/:id", getOneDashboard);

//messages
//send messages to admin
clientDashBoardRoutes.post("/messages/:userId/:adminId", sendMessage);

export default clientDashBoardRoutes;
