import mongoose from "mongoose";
import { clientBills } from "./clientDashboardinnterafaces";

interface bills extends clientBills, mongoose.Document {}

const ClientBillsSchema = new mongoose.Schema<clientBills>({
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

const clientBillsModel = mongoose.model<bills>("Bills", ClientBillsSchema);

export default clientBillsModel;
