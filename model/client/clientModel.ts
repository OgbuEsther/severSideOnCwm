import mongoose, { model, Schema, Document } from "mongoose";
import { clientDetails } from "../allInterfaces";

interface client extends clientDetails, Document {}

const clientSchema = new Schema<clientDetails>(
  {
    name: {
      type: String,
      required: [true, "please enter your full name"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "please enter a valid email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minlength: 4,
    },
    phoneNumber: {
      type: String,
    },
    clientType: {
      type: Boolean,
    },
    address: {
      type: String,
    },

    dashBoard: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clientDashboard",
      },
    ],
    notification: [],
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const clientModel = model<client>("clientCollections", clientSchema);

export default clientModel;
