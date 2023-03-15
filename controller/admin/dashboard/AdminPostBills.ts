import adminBillsModel from "../../../model/admin/dashboard/PostBills";
import { Request, Response } from "express";
import mongoose from "mongoose";
import clientBillsModel from "../../../model/client/dashboard/GenBills";
import adminDashboardModel from "../../../model/admin/agentdashBoard";
import clientDashBoardModel from "../../../model/client/clientDashBoard";
import clientModel from "../../../model/client/clientModel";

export const createBills = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { amountIssued } = req.body;

    //creating date

    const getDate = new Date().toDateString();

    //getting admin dashboard details
    const getAdminDashboard = await adminDashboardModel.findById(
      req.params.admindashBoardId
    );

    //getting user dashboard details

    const getClientDashboard = await clientDashBoardModel.findById(
      req.params.clientDashBoardId
    );

    //getting client details
    const getClient = await clientModel.findById(req.params.id);

    if (getAdminDashboard && getClientDashboard) {
      const postBills = await adminBillsModel.create({
        receiverName: getClient?.name,
        address: getClient?.address,
        date: getDate,
        amountIssued,
      });

      getClientDashboard?.bills?.push(
        new mongoose.Types.ObjectId(postBills?._id)
      );
      getClientDashboard?.save();

      getAdminDashboard?.bills?.push(
        new mongoose.Types.ObjectId(postBills?._id)
      );
      getAdminDashboard?.save();

      return res.status(200).json({
        message: "bill sent successfully",
        data: postBills,
      });
    } else {
      return res.status(404).json({
        message: "couldn't send bill",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error creating bills",
      data: error,
    });
  }
};
