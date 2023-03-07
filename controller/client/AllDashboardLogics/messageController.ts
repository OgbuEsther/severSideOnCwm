import { Request, Response } from "express";
import mongoose from "mongoose";
import AdminModel from "../../../model/admin/agentmodel";
import clientDashBoardModel from "../../../model/client/clientDashBoard";
import clientModel from "../../../model/client/clientModel";
import messageModel from "../../../model/client/dashboard/message";

//create or send a message

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sender, date, desc } = req.body;

    //getting the time and date
    const getDate = new Date().toDateString();

    //getting the user details

    const getUser = await clientModel.findById(req.params.userId);

    //getting admin details

    const getAdmin = await AdminModel.findById(req.params.adminId);

    if (getUser && getAdmin) {
      const newMsg = await messageModel.create({
        sender: getUser?.name,
        date: getDate,
        desc,
      });

      await clientModel.findByIdAndUpdate(getUser?._id, {
        $push: { notification: newMsg._id },
      });
      await AdminModel.findByIdAndUpdate(getAdmin._id, {
        $push: { notification: newMsg._id },
      });
      return res.status(201).json({
        message: "message successfully sent",
        data: newMsg,
      });
    } else {
      return res.status(404).json({
        message: "User or admin not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to send message",
      data: error,
    });
  }
};

//get all messsage sent by a user
