import clientModel from "../../model/client/clientModel";
import jwt, { Secret } from "jsonwebtoken";

import bcrypt from "bcrypt";
import { asyncHandler } from "../../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { clientDetails } from "../../model/allInterfaces";
import { AppError, HttpCodes } from "../../utils/appError";
import clientDashBoardModel from "../../model/client/clientDashBoard";
import mongoose from "mongoose";

//register

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber, clientType, address } =
      req.body;

    const Salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, Salt);

    const user = await clientModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      clientType,
      address,
    });

    const createDashboard = await clientDashBoardModel.create({
      _id: user?._id,
    });

    user?.dashBoard.push(new mongoose.Types.ObjectId(createDashboard?._id));
    user?.save();

    return res.status(200).json({
      message: "created a user successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

//get all

export const getAll = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const clients = await clientModel.find();

    return res.status(HttpCodes.CREATED).json({
      message: "gotten all users successfully",
      data: clients,
    });
  }
);

//login

export const loginClient = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await clientModel.findOne({ email });
    const secret: Secret = "letsblowbubblesandfightcrimes";

    return res.status(201).json({
      message: "user successfully logged in",
      data: user,
      token: jwt.sign(
        { _id: user?._id, email: user?.email, password: user?.password },
        secret,
        {
          expiresIn: "1h",
        }
      ),
    });
  } catch (error) {
    return res.status(400).json({
      message: " bad request ,unable to login user",
      data: error,
    });
  }
};
