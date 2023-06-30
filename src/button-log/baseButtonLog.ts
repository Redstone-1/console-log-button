import { IButtonLogClass, IButtonLogConfig, IMaterialLogConfig } from './types';
import { getDoubleButtonConfigs, getMaterialConfigs } from './common';
import styleValue from '../style';

/**
 * 基础 log 方法
 * @param {string} logBy log 第一个按钮中的文字内容
 * @param {string} logName log 第二个按钮中的文字内容
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */
export const buttonLog = (logBy = '', logName = '', ...logData: unknown[]) => console.log(
  ...getDoubleButtonConfigs(logBy, logName, styleValue.VUE_DEEP_CYAN, styleValue.VUE_BLUE_GRAY, ...logData)
);

/**
 * material ui 风格 log 方法
 * @param {object} config log 配置
 * - config.logName - log 按钮中的文字内容
 * - config.type - 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple'
 * - config.isGradient 是否是渐变按钮
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */
export const materialButtonLog = ({ logName = '', type = 'blue', isGradient = false }: IMaterialLogConfig, ...data: unknown[]) => {
  console.log(...getMaterialConfigs(isGradient, logName, type, ...data));
};

export default class ButtonLogClass implements IButtonLogClass {
  logBy;
  logName;
  preButtonColor;
  nextButtonColor;
  padding;
  borderRadius;
  fontColor;
  logTemplate = (logBy = '', logName = '') => `%c log-by-${logBy} %c ${logName} `;
  firstButtonStyle;
  secondButtonStyle;

  constructor(config: IButtonLogConfig) {
    this.logBy = config.logBy || '';
    this.logName = config.logName || '';
    this.preButtonColor = config.preButtonColor || styleValue.VUE_DEEP_CYAN;
    this.nextButtonColor = config.nextButtonColor || styleValue.VUE_BLUE_GRAY;
    this.padding = config.padding || 6;
    this.borderRadius = config.borderRadius || 1;
    this.fontColor = config.fontColor || '#fff';
    this.firstButtonStyle = `background: ${this.preButtonColor}; padding: ${this.padding}px; border-radius: ${this.borderRadius}px 0 0 ${this.borderRadius}px;  color: ${this.fontColor}`;
    this.secondButtonStyle = `background: ${this.nextButtonColor}; padding: ${this.padding}px; border-radius: 0 ${this.borderRadius}px ${this.borderRadius}px 0;  color: ${this.fontColor}`;
  }

  log = (...data: unknown[]) => {
    console.log(
      this.logTemplate(this.logBy, this.logName),
      this.firstButtonStyle,
      this.secondButtonStyle,
      ...data
    );
  };
}
