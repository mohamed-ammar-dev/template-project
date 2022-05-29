import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../types/enums";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const SettingsModel = sequelize.define(
  MODEL.SETTING,
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    active: {
      type: DataTypes.BOOLEAN,
    },

    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default SettingsModel;
