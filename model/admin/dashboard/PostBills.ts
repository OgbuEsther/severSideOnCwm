import mongoose from "mongoose";
import { adminBills } from "./adminDashboardInterfaces";

interface bills extends adminBills, mongoose.Document {}

const AdminBillsSchema = new mongoose.Schema<adminBills>(
  {
    receiverName: {
      type: String,
    },
    address: {
      type: String,
    },
    date: {
      type: String,
    },
    amountIssued: {
      type: Number,
    },
  },
  { timestamps: true }
);

const adminBillsModel = mongoose.model<bills>("adminBills", AdminBillsSchema);

export default adminBillsModel;
