export interface adminMessage {
  sender: string;
  date: string;
  description: string;
}

export interface adminPayment {
  amount: number;
  date: string;
  viewSender: string;
}

export interface adminBills {
  receiverName: string;
  address: string;
  date: string;
  amountIssued: number;
}
