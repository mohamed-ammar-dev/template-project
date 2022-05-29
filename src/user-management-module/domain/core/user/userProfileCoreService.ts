import { IUserRepo } from "../../ports/user/IUserRepo";
import authHelper from "../helpers/authHelper";

export class UserProfileCoreService {
  private userRepo: IUserRepo;

  set userRepoInstance(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  async getMyProfile(userId: number) {
    const user = await this.userRepo.findById(userId);

    authHelper.validateUser(user);

    return user;
  }
}
