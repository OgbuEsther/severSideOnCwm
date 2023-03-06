import { Request, Response } from "express";
import mongoose from "mongoose";
import clientModel from "../../../model/client/clientModel";
import messageModel from "../../../model/client/dashboard/message";

//create or send a message

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    //getting the user details

    const getUser = await clientModel.findById(req.params.userId);
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to send message",
      data: error,
    });
  }
};
