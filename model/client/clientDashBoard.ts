import mongoose from "mongoose";
import { clientDashBoard } from "../allInterfaces";

export interface client extends clientDashBoard, mongoose.Document {}

export const clientSchema = new mongoose.Schema<clientDashBoard>(
  {
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "messages",
      },
    ],
    paymentLog: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "allPayments",
      },
    ],
    bills: [
      // {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "clientBills",
      // },
    ],

    contact_us: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contactUs",
      },
    ],
  },
  { timestamps: true }
);

const clientDashBoardModel = mongoose.model<client>(
  "clientDashboard",
  clientSchema
);

export default clientDashBoardModel;
