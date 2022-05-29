export interface IUserAuthCoreService {
  register(params: any): any;
  login(params: any): any;
  logout(userId: any): any;
  refreshToken(params: any): any;
}
