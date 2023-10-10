import type { Decorator } from '../types';

/**
 * @ Author: xiwenge
 * @ Description: 类的描述
 * @param {String} description
 */
export function Description(description: string) {
  return function <T extends Decorator>(constructor: T) {
    return class extends constructor {
      description: string = description;
    };
  };
}
