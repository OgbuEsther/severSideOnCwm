export interface messagedata {
  sender: string;
  date: string;
  desc: string;
}

export interface paymentLogData {
  amount: number;
  date: string;
  paymentStatus: boolean;
  title: string;
}

export interface contact_usData {
  title: string;
  detail: string;
}

export interface clientBills {
  receiverName: string;
  address: string;
  date: string;
  amountIssued: number;
}
