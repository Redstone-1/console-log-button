export interface IButtonLogConfig {
  logBy?: string;
  logName?: string;
  preButtonColor?: string;
  nextButtonColor?: string;
  padding?: number;
  borderRadius?: number;
  fontColor?: string;
}

export interface IButtonLogClass {
  logBy: string;
  logName: string;
  preButtonColor: string;
  nextButtonColor: string;
  padding: number;
  borderRadius: number;
  fontColor: string;
  logTemplate?: (logBy: string, logName: string) => string;
  firstButtonStyle: string;
  secondButtonStyle: string;
}

export type TMaterialLog = 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple';

export interface IMaterialLogConfig {
  logName: string;
  type?: TMaterialLog;
  isGradient?: boolean;
}

export declare const buttonLog: (logBy?: string, logName?: string, ...logData: unknown[]) => void;

export declare const materialButtonLog: ({ logName, type, isGradient }: IMaterialLogConfig, ...data: unknown[]) => void;

export default class ButtonLogClass implements IButtonLogClass {
  logBy: string;
  logName: string;
  preButtonColor: string;
  nextButtonColor: string;
  padding: number;
  borderRadius: number;
  fontColor: string;
  logTemplate: (logBy?: string, logName?: string) => string;
  firstButtonStyle: string;
  secondButtonStyle: string;
  constructor(config: IButtonLogConfig);
  log: (...data: unknown[]) => void;
}

export declare const vueDevtool: (logBy: string, logName: string) => unknown[];
export declare const red: (logName: string) => unknown[];
export declare const orange: (logName: string) => unknown[];
export declare const yellow: (logName: string) => unknown[];
export declare const green: (logName: string) => unknown[];
export declare const cyan: (logName: string) => unknown[];
export declare const blue: (logName: string) => unknown[];
export declare const purple: (logName: string) => unknown[];
export declare const redLinearGradient: (logName: string) => unknown[];
export declare const orangeLinearGradient: (logName: string) => unknown[];
export declare const yellowLinearGradient: (logName: string) => unknown[];
export declare const greenLinearGradient: (logName: string) => unknown[];
export declare const cyanLinearGradient: (logName: string) => unknown[];
export declare const blueLinearGradient: (logName: string) => unknown[];
export declare const purpleLinearGradient: (logName: string) => unknown[];

export declare const getDoubleButtonConfigs: (logBy: string, logName: string, preButtonColor: string, nextButtonColor: string, ...logData: unknown[]) => unknown[];
export declare const getMaterialConfigs: (isGradient: boolean, logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];