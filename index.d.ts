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

export declare const buttonLogUtils: {
  vueDevtool: (logBy: string, logName: string) => unknown[];
  arcoRedOrange: (logBy: string, logName: string) => unknown[];
  arcoRedLightOrangeLight: (logBy: string, logName: string) => unknown[];
  arcoBluePurple: (logBy: string, logName: string) => unknown[];
  arcoBlueLightPurpleLight: (logBy: string, logName: string) => unknown[];
  arcoYellowGreen: (logBy: string, logName: string) => unknown[];
  arcoYellowLightGreenLight: (logBy: string, logName: string) => unknown[];
  arcoCyanOrange: (logBy: string, logName: string) => unknown[];
  arcoCyanLightOrangeLight: (logBy: string, logName: string) => unknown[];
  red: (logName: string) => unknown[];
  orange: (logName: string) => unknown[];
  yellow: (logName: string) => unknown[];
  green: (logName: string) => unknown[];
  cyan: (logName: string) => unknown[];
  blue: (logName: string) => unknown[];
  purple: (logName: string) => unknown[];
  redGhost: (logName: string) => unknown[];
  orangeGhost: (logName: string) => unknown[];
  yellowGhost: (logName: string) => unknown[];
  greenGhost: (logName: string) => unknown[];
  cyanGhost: (logName: string) => unknown[];
  blueGhost: (logName: string) => unknown[];
  purpleGhost: (logName: string) => unknown[];
  redLinearGradient: (logName: string) => unknown[];
  orangeLinearGradient: (logName: string) => unknown[];
  yellowLinearGradient: (logName: string) => unknown[];
  greenLinearGradient: (logName: string) => unknown[];
  cyanLinearGradient: (logName: string) => unknown[];
  blueLinearGradient: (logName: string) => unknown[];
  purpleLinearGradient: (logName: string) => unknown[];
};


export declare const getDoubleButtonConfigs: (logBy: string, logName: string, preButtonColor: string, nextButtonColor: string, ...logData: unknown[]) => unknown[];
export declare const getMaterialConfigs: (isGradient: boolean, logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
export declare const getMaterialGhostConfigs: (logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
