import chai from "chai";
import sinon from "sinon";
import { faker } from "@faker-js/faker";
import { UserAuthCoreService } from "../../domain/core/auth/authCoreService";
import { UserRepo } from "../../adapters/database/repository/userRepo";
import { AuthCacheService } from "../../domain/core/auth/authCacheService";
import chaiAsPromised from "chai-as-promised";
import authHelper from "../../domain/core/helpers/authHelper";

const expect = chai.expect;
chai.use(chaiAsPromised);

const stubValue = {
  id: faker.random.numeric(),
  phone: faker.phone.phoneNumber(),
  password: faker.random.numeric(),
};

describe("UserAuthService", function () {
  describe("login", function () {
    it("should login", async function () {
      const hashedPassword = await authHelper.hashPassword(stubValue.password);

      const userRepo = new UserRepo();

      sinon.stub(userRepo, "update").resolves();
      sinon
        .stub(userRepo, "findByPhoneForLogin")
        .resolves({ id: stubValue.id, password: hashedPassword });

      const authCacheService = new AuthCacheService();

      sinon.stub(authCacheService, "getRefreshToken").resolves();
      sinon.stub(authCacheService, "saveRefreshToken").resolves();

      const userService = new UserAuthCoreService(userRepo, authCacheService);

      const { user } = await userService.login({
        phone: stubValue.phone,
        password: stubValue.password,
      });

      expect(user).to.haveOwnProperty("id");
      expect(user).to.haveOwnProperty("accessToken");
      expect(user).to.haveOwnProperty("refreshToken");
    });

    it("should throw wrong username or password", async function () {
      const hashedPassword = stubValue.password;

      const userRepo = new UserRepo();

      sinon.stub(userRepo, "update").resolves();
      sinon
        .stub(userRepo, "findByPhoneForLogin")
        .resolves({ id: stubValue.id, password: hashedPassword });

      const authCacheService = new AuthCacheService();

      sinon.stub(authCacheService, "getRefreshToken").resolves();
      sinon.stub(authCacheService, "saveRefreshToken").resolves();

      const userService = new UserAuthCoreService(userRepo, authCacheService);

      expect(
        userService.register({
          phone: stubValue.phone,
          password: stubValue.password,
        })
      ).to.be.rejectedWith("wrong username or password");
    });
  });
});
