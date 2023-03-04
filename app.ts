import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error/errorHandler";
import clientAuthRouter from "./router/clientRoute";
import clientDashBoardRoutes from "./router/ClientDashBoardRoutes";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());
  //routes
  app.use("/api/clientauth", clientAuthRouter);
  app.use("/api/clientdashboard", clientDashBoardRoutes);

  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
