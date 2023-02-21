import clientModel from "../../model/clientModel";
import AdminModel from "../../model/agentmodel";

import bcrypt from "bcrypt";
import { asyncHandler } from "../../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { clientDetails } from "../../model/allInterfaces";
import { AppError, HttpCodes } from "../../utils/appError";

//get  admin

export const getAll = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const admin = await AdminModel.find();

    return res.status(HttpCodes.CREATED).json({
      message: "gotten all users successfully",
      data: admin,
    });
  }
);
