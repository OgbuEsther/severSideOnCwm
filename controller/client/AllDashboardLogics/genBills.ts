import { Request, Response } from "express";
import clientBillsModel from "../../../model/client/dashboard/GenBills";

export const getAllBills = async (req: Request, res: Response) => {
  try {
    const getYourBills = await clientBillsModel.findById(
      req.params.clientBillId
    );

    return res.status(200).json(getYourBills);
  } catch (error) {
    return res.status(400).json({
      message: "Error creating bills",
      data: error,
    });
  }
};
