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

    //getting dashboard deatils
    const getDashboard = await clientDashBoardModel.findById(
      req.params.dashboard
    );

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

      await getDashboard?.message.push(
        new mongoose.Types.ObjectId(newMsg?._id)
      );
      getDashboard?.save();

      // await clientModel.findByIdAndUpdate(getUser?._id, {
      //   $push: { notification: newMsg._id },
      // });
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

//delete message
export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const remove = await messageModel.findByIdAndDelete(req.params.id);

    //deleting from the dashboard
    const getDashboard = await clientDashBoardModel.findById(
      req.params.dashboard
    );

    return res.status(204).json({
      message: "message successfully deleted",
      data: remove,
    });
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to delete message",
      data: error,
    });
  }
};

//get all messages sent by a user

export const getMessages = async (req: Request, res: Response) => {
  try {
    const getMessage = await clientDashBoardModel
      .findById(req.params.clientId)
      .populate([
        {
          path: "message",
        },
        {
          path: "bills",
        },
      ]);

    return res.status(200).json({
      message: "messages successfully retrieved",
      data: getMessage,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "bad request , unable to get message",
      data: error,
      msg: error.message,
    });
  }
};
