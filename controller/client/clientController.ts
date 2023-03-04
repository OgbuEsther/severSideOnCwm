import clientDashBoardModel from "../../model/client/clientDashBoard";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { client } from "../../model/client/clientDashBoard";

//create client dashboard
export const newClientDashboard = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};
