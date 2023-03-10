import { Request, Response } from "express";
import mongoose from "mongoose";
import AdminModel from "../../../model/admin/agentmodel";
import adminDashboardModel from "../../../model/admin/agentdashBoard";
import adminMessageModel from "../../../model/admin/dashboard/adminMessage";

//admin to user

export const adminToOneUser = async (req:Request , res:Response):Promise<Response> => {
    try {
        
    } catch (error) {
      return res.status(400).json({
        message: "bad request , unable to send message",
        data: error,
      });    
    }
}