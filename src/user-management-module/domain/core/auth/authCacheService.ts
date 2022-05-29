import { injectable } from "inversify";
import { server } from "../../../../config/server";
import { IAuthCacheService } from "../../../interfaces/IAuthCacheService";

@injectable()
export class AuthCacheService implements IAuthCacheService {
  async saveRefreshToken(userId: number, refreshToken: string) {
    await server.cacheConnection.setEx(
      `${userId}:refreshToken`,
      60 * 60 * 24, //One day to expire
      refreshToken
    );
  }

  async getRefreshToken(userId: number) {
    return await server.cacheConnection.get(`${userId}:refreshToken`);
  }

  clearRefreshToken(userId: number) {
    server.cacheConnection.del(`${userId}:refreshToken`);
  }
}
