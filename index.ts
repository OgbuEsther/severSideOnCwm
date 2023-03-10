import express, { Application } from "express";
import appConfig from "./app";
import dbConfig from "./config/db";
import adminAuthRoutes from "./router/adminRoute";

const PORT: number = 8000;

const app: Application = express();
appConfig(app);
dbConfig();

//admin routes
app.use("/api/adminauth", adminAuthRoutes);

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
