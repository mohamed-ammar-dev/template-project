import { inject, injectable } from "inversify";
import { MESSAGE } from "../../../../shared/localization/enums";
import { localizedMessage } from "../../../../shared/utils/localizedMessage";
import { ROLE_TYPE } from "../../../types/enums";
import { IUserRepo } from "../../ports/user/IUserRepo";
import authHelper from "../helpers/authHelper";
import "reflect-metadata";
import { DI_TYPES } from "../../../../shared/types/di";
import { IAuthCacheService } from "../../../interfaces/IAuthCacheService";

@injectable()
export class UserAuthCoreService {
  constructor(
    @inject(DI_TYPES.UserRepo) private userRepo: IUserRepo,
    @inject(DI_TYPES.AuthCacheService)
    private authCacheService: IAuthCacheService
  ) {}

  async login(params: any) {
    const phone = params.phone;
    const password = params.password;

    const user = await this.userRepo.findByPhoneForLogin(phone);

    authHelper.validateCredential(user);

    const isMatch = await authHelper.comparePassword({
      password,
      hashedPassword: user.password,
    });

    authHelper.validateCredential(isMatch);

    const userId = user.id;

    const accessToken = authHelper.generateAccessToken({
      id: userId,
      role: ROLE_TYPE.USER,
    });

    const refreshToken = await this.generateRefreshTokenIfNotExist(userId);

    const lastLogin = new Date();

    await this.userRepo.update!({
      update: { id: userId },
      condition: { lastLogin },
    });

    user.accessToken = accessToken;
    user.refreshToken = refreshToken;

    user.lastLogin = lastLogin;

    delete user.password;

    return localizedMessage({ user }, MESSAGE.LOGIN_SUCCESS, params.language);
  }

  async register(params: any) {
    const email = params.email;
    const phone = params.phone;

    const findUser = await this.userRepo.findByEmailOrPhone({
      email,
      phone,
    });

    authHelper.validateDuplicateRegister(findUser);

    const user = await this.userRepo.create({
      ...params,
      lastLogin: new Date(),
    });

    const userId = user.id;

    const accessToken = authHelper.generateAccessToken({
      id: userId,
      role: ROLE_TYPE.USER,
    });

    const refreshToken = authHelper.generateRefreshToken();

    await this.authCacheService.saveRefreshToken(userId, refreshToken);

    return localizedMessage(
      { user: { id: userId, accessToken, refreshToken } },
      MESSAGE.SIGNUP_SUCCESS,
      params.language
    );
  }

  logout(userId: number) {
    this.authCacheService.clearRefreshToken(userId);
  }

  async refreshToken(params: any) {
    const userId = params.userId;
    const refreshToken = params.refreshToken;

    const savedRefreshToken = await this.authCacheService.getRefreshToken(
      userId
    );

    authHelper.validateRefreshToken(savedRefreshToken, refreshToken);

    return authHelper.generateAccessToken({
      id: userId,
      role: ROLE_TYPE.USER,
    });
  }

  private async generateRefreshTokenIfNotExist(userId: number) {
    let refreshToken = await this.authCacheService.getRefreshToken(userId);

    if (refreshToken) return refreshToken;

    refreshToken = authHelper.generateRefreshToken();
    await this.authCacheService.saveRefreshToken(userId, refreshToken);

    return refreshToken;
  }
}
