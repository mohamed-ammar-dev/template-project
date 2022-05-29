import { injectable } from "inversify";
import { Op } from "sequelize";
import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { IBaseRepo } from "../../../../shared/interfaces/IBaseRepo";
import { UserModel } from "../../../database/models/user";

@injectable()
export class UserRepo extends BaseRepo implements IBaseRepo {
  constructor() {
    super(UserModel);
  }

  async findByPhoneForLogin(phone: string) {
    return await this.findOne!({
      condition: { phone },
      attributes: {
        exclude: ["verifiedAt"],
      },
    });
  }

  async isUserExists(userId: number) {
    return await this.findOne!({
      condition: { id: userId },
      attributes: ["id"],
    });
  }

  async findById(id: number) {
    return await this.findOne!({ condition: { id } });
  }

  async isEmailExists(email: string) {
    return await this.findOne!({
      condition: { email },
      attributes: ["email"],
    });
  }

  async isPhoneExists(phone: string) {
    return await this.findOne!({
      condition: { phone },
      attributes: ["phone"],
    });
  }

  async findByEmailOrPhone(params: any) {
    return await this.findOne!({
      condition: {
        [Op.or]: [{ email: params.email }, { phone: params.phone }],
      },
    });
  }
}
