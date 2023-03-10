import mongoose from "mongoose";
import { adminDashboard } from "../allInterfaces";

interface IAdminDashboard extends adminDashboard, mongoose.Document {}

const adminDashboardSchema = new mongoose.Schema<adminDashboard>({
  message: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminMessageCollection",
    },
  ],
  paymentLog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminpaymentLogCollection",
    },
  ],
});

const adminDashboardModel = mongoose.model<IAdminDashboard>(
  "adminDashBoard",
  adminDashboardSchema
);
export default adminDashboardModel;
