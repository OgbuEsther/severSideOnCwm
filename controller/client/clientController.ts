import clientDashBoardModel from "../../model/client/clientDashBoard";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { client } from "../../model/client/clientDashBoard";
import clientModel from "../../model/client/clientModel";

//create client dashboard
export const newClientDashboard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { schedule, paymentStatus } = req.body;

    const getUser = await clientModel.findById(req.params.userId);
    if (getUser) {
      const clientDashBoard = await clientDashBoardModel.create({
        schedule,
        paymentStatus,
      });

      return res.status(201).json({
        message: "Success",
        data: clientDashBoard,
      });
    } else {
      return res.status(400).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//get all dashboards

export const getAllDashboards = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dashboards = await clientDashBoardModel.find();
    return res.status(200).json(dashboards);
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//get one
export const getOneDashboard = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dashboard = await clientDashBoardModel.findById(req.params.id);
    return res.status(200).json(dashboard);
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};
