import { Request, Response } from "express";
import { diContainer } from "../../../../config/inversify.config";
import { DI_TYPES } from "../../../../shared/types/di";
import { sendResponse } from "../../../../shared/utils/sendResponse";
import { IUserAuthCoreService } from "../../../interfaces/IUserAuthCoreService";

export class UserAuthController {
  async register(request: Request, response: Response) {
    const userAuthCoreService = diContainer.get<IUserAuthCoreService>(
      DI_TYPES.UserAuthCoreService
    );
    const user = await userAuthCoreService.register(request.body);

    sendResponse(response, user);
  }

  async login(request: Request, response: Response) {
    const userAuthCoreService = diContainer.get<IUserAuthCoreService>(
      DI_TYPES.UserAuthCoreService
    );
    const user = await userAuthCoreService.login(request.body);

    sendResponse(response, user);
  }

  async logout(request: Request, response: Response) {
    const userAuthCoreService = diContainer.get<IUserAuthCoreService>(
      DI_TYPES.UserAuthCoreService
    );
    await userAuthCoreService.logout(request.user.id);

    sendResponse(response);
  }

  async refreshToken(request: Request, response: Response) {
    const userAuthCoreService = diContainer.get<IUserAuthCoreService>(
      DI_TYPES.UserAuthCoreService
    );
    const accessToken = await userAuthCoreService.refreshToken(request.body);

    sendResponse(response, { accessToken });
  }
}
