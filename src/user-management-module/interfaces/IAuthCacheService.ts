export interface IAuthCacheService {
  saveRefreshToken(userId: number, refreshToken: string): any;
  getRefreshToken(userId: number): any;
  clearRefreshToken(userId: number): any;
}
