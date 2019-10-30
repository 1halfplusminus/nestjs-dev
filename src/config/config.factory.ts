import { ConfigurationService } from './config.service';
import { Provider } from '@nestjs/common';

export const createConfigurationServiceProvider: () => Provider<
  ConfigurationService<any>
> = () => {
  return {
    provide: ConfigurationService,
    useClass: ConfigurationService,
  };
};
