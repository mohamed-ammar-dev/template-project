import { Model, Sequelize } from "sequelize";
import { UserAttributes } from "../shared/user";
import { server } from "../../../config/server";
import { MODEL } from "../../types/enums";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const UserModel = sequelize.define<Model>(
  MODEL.USER,
  {
    ...UserAttributes(),
  },
  {
    freezeTableName: true,

    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
  }
);

export { UserModel };

import "../triggers/user";
