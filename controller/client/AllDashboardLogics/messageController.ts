import { Request, Response } from "express";
import mongoose from "mongoose";
import AdminModel from "../../../model/admin/agentmodel";
import clientModel from "../../../model/client/clientModel";
import messageModel from "../../../model/client/dashboard/message";

//create or send a message

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sender, date, desc } = req.body;
    //getting the user details

    const getUser = await clientModel.findById(req.params.userId);

    //getting admin details

    const getAdmin = await AdminModel.findById(req.params.adminId);

    if (getUser && getAdmin) {
      const newMsg = await messageModel.create({
        sender,
        date,
        desc,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to send message",
      data: error,
    });
  }
};
