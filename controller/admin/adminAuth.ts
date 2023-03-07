import clientModel from "../../model/client/clientModel";
import AdminModel from "../../model/admin/agentmodel";
import bcrypt from "bcrypt";
import { asyncHandler } from "../../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { adminDetails, clientDetails } from "../../model/allInterfaces";
import { AppError, HttpCodes } from "../../utils/appError";

//get  admin

export const getAllAdmin = asyncHandler(
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

export const adminLogin = asyncHandler(
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
          message: "unable to login admin",
          httpcode: HttpCodes.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(HttpCodes.OK).json({
      message: "admin successfully logged in",
      data: admin,
    });
  }
);

export const adminRegister = asyncHandler(
  async (
    req: Request<{}, {}, adminDetails>,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { name, email, password } = req.body;

    const Salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, Salt);

    const user = await AdminModel.create({
      name,
      email,
      password: hashedPassword,
    });

    if (!user) {
      next(
        new AppError({
          message: "unable to register admin",
          httpcode: HttpCodes.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(HttpCodes.CREATED).json({
      message: " created  an admin successfully",
      data: user,
    });
  }
);
