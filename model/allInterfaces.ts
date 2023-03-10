export interface clientDetails {
  name: string;
  address: string;
  clientType: boolean;
  email: string;
  phoneNumber: string;
  dashBoard: {}[];
  password: string;
  notification: []; //pushing the message model inside
  //location : string
}

export interface clientDashBoard {
  message: {}[]; //sender , date and desc ,
  paymentLog: {}[]; //amount , date , payment status
  bills: [];
  contact_us: {}[]; //title and details of the message .....this will be a form
}

export interface adminDetails {
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
  dashBoard: {}[];
  notification: [];
}

export interface adminDashboard {
  message: {}[];
  paymentLog: {}[];
  //chart : {}[];
  
}

export interface IAuthUser extends Request {
  user: clientDetails;
  admin: adminDetails;
}

//socket.io
