import { DataTypes } from "sequelize";
import { LOCALIZATION_LANGUAGE } from "../../../shared/types/enums";
import { DEVICE, GENDER, VERIFIED_WITH } from "../../types/enums";

export const UserAttributes = () => {
  return {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastLogin: {
      type: DataTypes.DATE,
    },

    gender: {
      type: DataTypes.ENUM(GENDER.FEMALE, GENDER.MALE),
      allowNull: false,
    },

    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    device: {
      type: DataTypes.ENUM(DEVICE.ANDROID, DEVICE.DESKTOP, DEVICE.IOS),
      allowNull: false,
    },

    verifiedAt: {
      type: DataTypes.DATE,
    },

    verifiedWith: {
      type: DataTypes.ENUM(
        VERIFIED_WITH.EMAIL,
        VERIFIED_WITH.PHONE,
        VERIFIED_WITH.BOTH
      ),
    },

    language: {
      type: DataTypes.ENUM(
        LOCALIZATION_LANGUAGE.ENGLISH,
        LOCALIZATION_LANGUAGE.ARABIC
      ),
      defaultValue: LOCALIZATION_LANGUAGE.ENGLISH,
    },
  };
};
