interface IButtonLogConfig {
  logBy?: string;
  logName?: string;
  preButtonColor?: string;
  nextButtonColor?: string;
  padding?: number;
  borderRadius?: number;
  fontColor?: string;
}
interface IButtonLogClass {
  logBy: string;
  logName: string;
  preButtonColor: string;
  nextButtonColor: string;
  padding: number;
  borderRadius: number;
  fontColor: string;
  logTemplate?: (logBy: string, logName: string) => string;
}
interface IMaterialLogConfig {
  logName: string;
  type?: 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple';
  isLinearGradient?: boolean;
}
/**
* 基础 log 方法
* @param {string} logBy log 第一个按钮中的文字内容
* @param {string} logName log 第二个按钮中的文字内容
* @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
*/
export declare const buttonLog: (logBy?: string, logName?: string, ...logData: any[]) => void;
/**
* material ui 风格 log 方法
* @param {object} config log 配置
* - config.logName - log 按钮中的文字内容
* - config.type - 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple'
* - config.isLinearGradient 是否是渐变按钮
* @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
*/
export declare const materialButtonLog: ({ logName, type, isLinearGradient }: IMaterialLogConfig, ...data: any[]) => void;
export default class ButtonLogClass implements IButtonLogClass {
  logBy: string;
  logName: string;
  preButtonColor: string;
  nextButtonColor: string;
  padding: number;
  borderRadius: number;
  fontColor: string;
  logTemplate: (logBy?: string, logName?: string) => string;
  constructor(config: IButtonLogConfig);
  log: (...data: any[]) => void;
}
export {};
