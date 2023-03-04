import { Router } from "express";
import {
  getAllDashboards,
  getOneDashboard,
  newClientDashboard,
} from "../controller/client/clientController";

const clientDashBoardRoutes = Router();

clientDashBoardRoutes.post("/new/:userId", newClientDashboard);
clientDashBoardRoutes.get("/", getAllDashboards);
clientDashBoardRoutes.get("/:id", getOneDashboard);

export default clientDashBoardRoutes;
