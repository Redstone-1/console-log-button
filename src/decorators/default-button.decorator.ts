import { defaultConfig } from '../constant';
import type { ButtonConfig } from '../types';

export function DefaultButton(backgroundColor?: string) {
  return function (_target: any, _attribute: any, descriptor: any) {
    const method = descriptor.value;

    if (backgroundColor) {
      defaultConfig[0].backgroundColor = backgroundColor;
    }

    descriptor.value = function (config: ButtonConfig[] = []) {
      if (!Array.isArray(config)) {
        throw new Error('defineButtonLog 的参数必须是一个数组');
      }
      const isConfigExist = config.length > 0;
      return method.call(this, isConfigExist ? config : defaultConfig);
    };
  };
}
