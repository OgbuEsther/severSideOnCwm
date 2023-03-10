import { Request, Response } from "express";
import mongoose from "mongoose";
import AdminModel from "../../../model/admin/agentmodel";
import adminDashboardModel from "../../../model/admin/agentdashBoard";
import adminMessageModel from "../../../model/admin/dashboard/adminMessage";
import clientModel from "../../../model/client/clientModel";

//admin to user

export const adminToOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sender, date, description } = req.body;

    //getting admin dashboard details
    const getDashboard = await adminDashboardModel.findById(
      req.params.adminDashboard
    );

    //get date
    const getDate = new Date().toDateString();

    //getting the user details

    const getUser = await clientModel.findById(req.params.userId);

    //getting admin details

    const getAdmin = await AdminModel.findById(req.params.adminId);
    if (getAdmin && getUser) {
      const adminMsg = await adminMessageModel.create({
        sender: getAdmin?.name,
        date: getDate,
        description,
      });

      await getDashboard?.message.push(
        new mongoose.Types.ObjectId(adminMsg?._id)
      );
      getDashboard?.save();

      await clientModel.findByIdAndUpdate(getUser?._id, {
        $push: { notification: adminMsg._id },
      });
      // await AdminModel.findByIdAndUpdate(getAdmin._id, {
      //   $push: { notification: newMsg._id },
      // });
      return res.status(201).json({
        message: "message successfully sent",
        data: adminMsg,
      });
    } else {
      return res.status(404).json({
        message: "user or admin not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to send message",
      data: error,
    });
  }
};
