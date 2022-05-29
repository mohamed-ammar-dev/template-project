import { IBaseRepo } from "../../../../shared/interfaces/IBaseRepo";

export interface IUserRepo extends IBaseRepo {
  findById(id: number): any;
  isPhoneExists(phone: string): any;
  isEmailExists(email: string): any;
  isUserExists(userId: number): any;
  findByPhoneForLogin(phone: string): any;
  findByEmailOrPhone(params: any): any;
}
