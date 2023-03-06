export interface messagedata {
  sender: string;
  date: string;
  details: string;
}

export interface paymentLogData {
  amount: number;
  date: string;
  paymentStatus: boolean;
}
