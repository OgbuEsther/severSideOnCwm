import { Request, Response } from "express";
import mongoose from "mongoose";
import contactModel from "../../../model/client/dashboard/contact_us";

//create message
export const newMsg = async (
  req: Request,
  res: Resposne
): Promise<Response> => {
  try {
    const { title, detail } = req.body;

    const msg = await contactModel.create({
      title,
      detail,
    });
    return res.status(201).json({
      message: "sent ",
      data: msg,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occured while sending message",
      data: error,
    });
  }
};
