import { TMaterialLog } from './types';

const colorMap = new Map([
  ['yellow', '#FFC107'],
  ['orange', '#ff9800'],
  ['red', '#f44336'],
  ['green', '#4caf50'],
  ['cyan', '#00BCD4'],
  ['blue', '#2196f3'],
  ['purple', '#9C27B0'],
]);

const gradientColorMap = new Map([
  ['yellow', 'linear-gradient(to right, #FDB813, #FFAA00)'],
  ['orange', 'linear-gradient(to right, #FFA500, #FF6347)'],
  ['red', 'linear-gradient(to right, #FF416C, #FF4B2B)'],
  ['green', 'linear-gradient(to right, #00b09b, #96c93d)'],
  ['cyan', 'linear-gradient(to right, #1D976C, #93F9B9)'],
  ['blue', 'linear-gradient(to right, #2196F3, #4FC3F7)'],
  ['purple', 'linear-gradient(to right, #DA22FF, #9733EE)'],
]);

export const getDoubleButtonConfigs = (logBy: string, logName: string, preButtonColor: string, nextButtonColor: string, ...logData: unknown[]): unknown[] => {
  const configs = [
    `%c log-by-${logBy} %c ${logName} `,
    `background: ${preButtonColor}; padding: 6px; border-radius: 1px 0 0 1px;  color: #fff`,
    `background: ${nextButtonColor}; padding: 6px; border-radius: 0 1px 1px 0;  color: #fff`,
    ...logData
  ];
  return configs;
};

export const getMaterialConfigs = (isGradient: boolean, logName: string, type: TMaterialLog, ...data: unknown[]): unknown[] => {
  const configs = [
    `%c${logName}`,
    `${isGradient ? 'background-image' : 'background'}: ${isGradient ? gradientColorMap.get(type) : colorMap.get(type)}; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;`,
    ...data,
  ];
  return configs;
};

export const getMaterialGhostConfigs = (logName: string, type: TMaterialLog, ...data: unknown[]): unknown[] => {
  const configs = [
    `%c ${logName} `,
    `border: 2px solid ${colorMap.get(type)}; padding: 6px 12px; border-radius: 6px; font-size: 14px; color: ${colorMap.get(type)}; font-weight: 600;`,
    ...data,
  ];
  return configs;
};
