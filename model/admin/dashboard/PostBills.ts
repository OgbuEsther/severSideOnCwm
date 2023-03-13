import mongoose from "mongoose";
import { adminBills } from "./adminDashboardInterfaces";

interface bills extends adminBills, mongoose.Document {}

const AdminBillsSchema = new mongoose.Schema<adminBills>({
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
});

const adminBillsModel = mongoose.model<bills>("Bills", AdminBillsSchema);

export default adminBillsModel;
