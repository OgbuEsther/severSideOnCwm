import { Router } from "express";
import { newClientDashboard } from "../controller/client/clientController";

const clientDashBoardRoutes = Router();

clientDashBoardRoutes.post("/new/:userId", newClientDashboard);

export default clientDashBoardRoutes;
