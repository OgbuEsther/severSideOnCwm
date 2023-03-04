import { Router } from "express";
import { newClientDashboard } from "../controller/client/clientController";

const clientDashBoardRoutes = Router();

clientDashBoardRoutes.post("/:id/new", newClientDashboard);

export default clientDashBoardRoutes;
