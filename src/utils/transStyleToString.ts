import { ButtonConfig } from "../types";

export default (style: Omit<ButtonConfig, 'content'>): string => {
  if (!style || !Object.keys(style).length) {
    return '';
  }

  const convertedStyle: string[] = [];

  for (const [key, value] of Object.entries(style)) {
    if (typeof value == 'string' || typeof value === 'number') {
      const convertedKey = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
      convertedStyle.push(`${convertedKey}: ${value}`);
    } else {
      throw new Error('样式对象的值必须是字符串或者数字');
    }
  }

  return convertedStyle.join('; ');
};
