import adminBillsModel from "../../../model/admin/dashboard/PostBills";
import { Request, Response } from "express";
import mongoose from "mongoose";
import clientBillsModel from "../../../model/client/dashboard/GenBills";
import adminDashboardModel from "../../../model/admin/agentdashBoard";
import clientDashBoardModel from "../../../model/client/clientDashBoard";

export const createBills = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { receiverName, address, date, amountIssued } = req.body;

    //getting admin dashboard details
    const getAdminDashboard = await adminDashboardModel.findById(
      req.params.admindashBoardId
    );

    //getting user dashboard details

    const getClientDashboard = await clientDashBoardModel.findById(
      req.params.clientDashBoardId
    );

    if (getAdminDashboard && getClientDashboard) {
      const postBills = await adminBillsModel.create({
        receiverName,
        address,
        date,
        amountIssued,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error creating bills",
      data: error,
    });
  }
};
