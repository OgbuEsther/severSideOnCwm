import mongoose, { Document, model, Schema } from "mongoose";

import { paymentLogData } from "./clientDashboardinnterafaces";

export interface payment extends paymentLogData, Document {}

const paymentSchema = new Schema<paymentLogData>({});
