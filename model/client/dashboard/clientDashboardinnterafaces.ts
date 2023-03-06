export interface messagedata {
  sender: string;
  date: string;
  desc: string;
}

export interface paymentLogData {
  amount: number;
  date: string;
  paymentStatus: boolean;
}

export interface contact_usData {
  title: string;
  detail: string;
}
