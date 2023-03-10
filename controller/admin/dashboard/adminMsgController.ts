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
    const { sender, date, desc } = req.body;

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
