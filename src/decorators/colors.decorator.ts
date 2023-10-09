import colors from '../colors';
import type { Decorator, Color } from '../types';

/**
 * @ Author: xiwenge
 * @ Description: 注入 color
 */
export function Colors() {
  return function <T extends Decorator>(constructor: T) {
    return class extends constructor {
      colors: Color = colors;
    };
  };
}
