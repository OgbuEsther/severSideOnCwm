import mongoose, { Document, model, Schema } from "mongoose";

import { paymentLogData } from "./clientDashboardinnterafaces";

export interface payment extends paymentLogData, Document {}

const paymentSchema = new Schema<paymentLogData>({
  amount: {
    type: Number,
  },
  date: {
    type: String,
  },
  paymentStatus: {
    type: Boolean,
  },
});

const paymentModel = model<payment>("allPayments", paymentSchema);

export default paymentModel;
