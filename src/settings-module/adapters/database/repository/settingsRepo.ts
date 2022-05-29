import SettingsModel from "../../../database/models/settings";

export class SettingsRepo {
  async findByKey(key: string) {
    return await SettingsModel.findOne({ where: { key }, raw: true });
  }
}

export default new SettingsRepo();
