import mongoose from "mongoose";
import { clientDashBoard } from "./allInterfaces";

interface client extends clientDashBoard, mongoose.Document {}

export const clientSchema = new mongoose.Schema<clientDashBoard>(
  {
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "notifications",
      },
    ],
    paymentLog: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "allPayments",
      },
    ],
    bills: [],
    schedule: {
      type: String,
    },
    paymentStatus: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const clientDashBoardModel = mongoose.model("clientDashBoards", clientSchema);

export default clientDashBoardModel;
