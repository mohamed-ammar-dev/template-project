import chai from "chai";
import sinon from "sinon";
import { faker } from "@faker-js/faker";
import { UserAuthCoreService } from "../../domain/core/auth/authCoreService";
import { UserRepo } from "../../adapters/database/repository/userRepo";
import { AuthCacheService } from "../../domain/core/auth/authCacheService";
import chaiAsPromised from "chai-as-promised";

const expect = chai.expect;
chai.use(chaiAsPromised);

const stubValue = {
  id: faker.random.numeric(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  gender: faker.name.gender(),
  birthDate: faker.date.birthdate(),
  device: faker.random.word(),
};

describe("UserAuthService", function () {
  describe("signup", function () {
    it("should create a new user", async function () {
      const userRepo = new UserRepo();

      sinon.stub(userRepo, "create").resolves(stubValue);
      sinon.stub(userRepo, "findByEmailOrPhone").resolves(null);

      const authCacheService = new AuthCacheService();

      sinon.stub(authCacheService, "saveRefreshToken").resolves();

      const userService = new UserAuthCoreService(userRepo, authCacheService);

      const { user } = await userService.register({ email: stubValue.email });

      expect(user).to.haveOwnProperty("id");
      expect(user).to.haveOwnProperty("accessToken");
      expect(user).to.haveOwnProperty("refreshToken");
    });

    it("should throw duplicate email or password", async function () {
      const userRepo = new UserRepo();

      sinon.stub(userRepo, "create").resolves(stubValue);
      sinon.stub(userRepo, "findByEmailOrPhone").resolves({ id: stubValue.id });

      const authCacheService = new AuthCacheService();

      sinon.stub(authCacheService, "saveRefreshToken").resolves();

      const userService = new UserAuthCoreService(userRepo, authCacheService);

      expect(
        userService.register({ email: stubValue.email })
      ).to.be.rejectedWith("this email or phone already exist");
    });
  });
});
