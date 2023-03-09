import mongoose from "mongoose";
import { adminDashboard } from "../allInterfaces";

interface IAdminDashboard extends adminDashboard, mongoose.Document {}

const adminDashboardSchema = new mongoose.Schema<adminDashboard>({});
