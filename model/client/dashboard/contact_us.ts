import mongoose from "mongoose";
import { contact_usData } from "./clientDashboardinnterafaces";

interface Contact extends contact_usData, mongoose.Document {}

const contactSchema = new mongoose.Schema<contact_usData>(
  {
    title: {
      type: String,
    },
    detail: {
      type: String,
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model<Contact>("contactUs", contactSchema);

export default contactModel;
