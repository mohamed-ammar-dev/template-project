import { Container } from "inversify";
import { DI_TYPES } from "../shared/types/di";
import { UserRepo } from "../user-management-module/adapters/database/repository/userRepo";
import { AuthCacheService } from "../user-management-module/domain/core/auth/authCacheService";
import { UserAuthCoreService } from "../user-management-module/domain/core/auth/authCoreService";
import { IUserRepo } from "../user-management-module/domain/ports/user/IUserRepo";
import { IAuthCacheService } from "../user-management-module/interfaces/IAuthCacheService";
import { IUserAuthCoreService } from "../user-management-module/interfaces/IUserAuthCoreService";

const diContainer = new Container();

diContainer
  .bind<IUserAuthCoreService>(DI_TYPES.UserAuthCoreService)
  .to(UserAuthCoreService);
diContainer
  .bind<IAuthCacheService>(DI_TYPES.AuthCacheService)
  .to(AuthCacheService)
  .inSingletonScope();

diContainer.bind<IUserRepo>(DI_TYPES.UserRepo).to(UserRepo).inSingletonScope();

export { diContainer };
