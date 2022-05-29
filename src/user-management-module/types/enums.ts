export enum MODEL {
  USER = "users",
  FORGET_PASSWORD_CODE = "forget_password_codes",
  VERIFICATION_CODE = "verification_codes",
}

export enum ROLE_TYPE {
  USER = "users",
  SUPER_USER = "superuser",
  MANAGER = "manager",
}

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum DEVICE {
  IOS = "IOS",
  ANDROID = "ANDROID",
  DESKTOP = "DESKTOP",
}

export enum VERIFIED_WITH {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  BOTH = "BOTH",
}

export enum VERIFICATION_TYPE {
  LINK = "VERIFICATION_LINK",
  CODE = "VERIFICATION_CODE",
  FORGET_PASSWORD = "FORGET_PASSWORD",
}
