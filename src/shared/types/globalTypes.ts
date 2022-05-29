declare namespace Express {
  export interface Request {
    user: any;
    headers: any;
    admin: any;
    userType: any;
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}
