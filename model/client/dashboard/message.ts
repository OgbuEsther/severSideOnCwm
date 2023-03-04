import mongoose, { model, Schema } from "mongoose";
import { messagedata } from "./clientDashboardinnterafaces";

interface messages extends messagedata, mongoose.Document {}

export const messageSchema = new Schema<messagedata>(
  {
    notifyAll: {
      type: String,
    },
    notifyOne: {
      type: String,
    },
  },
  { timestamps: true }
);

const messageModel = model<messages>("notifications", messageSchema);

export default messageModel;
