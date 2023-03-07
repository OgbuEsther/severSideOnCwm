import mongoose, { model, Schema } from "mongoose";
import { messagedata } from "./clientDashboardinnterafaces";

interface messages extends messagedata, mongoose.Document {}

export const messageSchema = new Schema<messagedata>(
  {
    date: {
      type: String,
    },
    sender: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const messageModel = model<messages>("messages", messageSchema);

export default messageModel;
