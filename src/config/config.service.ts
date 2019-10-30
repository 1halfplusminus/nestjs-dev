import * as config from 'config';
export class ConfigurationService<T extends string> {
  get<S>(key: string & T) {
    return config.get<S>(key);
  }
  has(key: string & T) {
    return config.has(key);
  }
}
