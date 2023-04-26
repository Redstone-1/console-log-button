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
  isGradient?: boolean
}