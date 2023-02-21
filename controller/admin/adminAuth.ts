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

//login user

export const login = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { email } = req.body;
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      next(
        new AppError({
          message: "unable to login user",
          httpcode: HttpCodes.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(HttpCodes.OK).json({
      message: "user successfully logged in",
      data: admin,
    });
  }
);
