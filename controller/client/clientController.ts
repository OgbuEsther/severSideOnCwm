import clientDashBoardModel from "../../model/client/clientDashBoard";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { client } from "../../model/client/clientDashBoard";
import clientModel from "../../model/client/clientModel";

//create client dashboard
export const newClientDashboard = async (req: Request, res: Response) => {
  try {
    const { paymentLog, message, bills, schedule, paymentStatus } = req.body;

    const getUser = await clientModel.findById(req.params.userId);
    if (getUser) {
      const clientDashBoard = await clientDashBoardModel.create({
        message,
        paymentLog,
        bills,
        schedule,
        paymentStatus,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};
