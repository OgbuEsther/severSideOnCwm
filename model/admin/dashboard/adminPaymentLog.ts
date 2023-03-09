import mongoose from "mongoose";
import { adminPayment } from "./adminDashboardInterfaces";

interface IAdminPayment extends adminPayment, mongoose.Document {}

const adminPaymentSchema = new mongoose.Schema<adminPayment>({
  amount: {
    type: Number,
  },
  date: {
    type: String,
  },
  viewSender: {
    type: String,
  },
});

const adminPaymentModel = mongoose.model(
  "adminpaymentLogCollection",
  adminPaymentSchema
);
export default adminPaymentModel;
