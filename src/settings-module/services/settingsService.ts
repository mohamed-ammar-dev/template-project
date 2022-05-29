import settingRepo from "../adapters/database/repository/settingsRepo";

class SettingsService {
  async getSettingsByKey(key: string) {
    const settings: any = await settingRepo.findByKey(key);

    if (settings && settings.active) return settings.value;

    return null;
  }
}

export default new SettingsService();
