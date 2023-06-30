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

export declare const styleValue: {
  VUE_DEEP_CYAN: string;
  VUE_BLUE_GRAY: string;
  ARCO_DEEP_RED: string;
  ARCO_LIGHT_RED: string;
  ARCO_DEEP_ORANGE: string;
  ARCO_LIGHT_ORANGE: string;
  ARCO_DEEP_YELLOW: string;
  ARCO_LIGHT_YELLOW: string;
  ARCO_DEEP_GREEN: string;
  ARCO_LIGHT_GREEN: string;
  ARCO_DEEP_CYAN: string;
  ARCO_LIGHT_CYAN: string;
  ARCO_DEEP_BLUE: string;
  ARCO_LIGHT_BLUE: string;
  ARCO_DEEP_PURPLE: string;
  ARCO_LIGHT_PURPLE: string;
  MATERIAL_BLUE: string;
  MATERIAL_GREY: string;
  MATERIAL_RED: string;
  MATERIAL_YELLOW: string;
  MATERIAL_GREEN: string;
  MATERIAL_ORANGE: string;
  MATERIAL_PURPLE: string;
  MATERIAL_TEAL: string;
  MATERIAL_PINK: string;
  MATERIAL_BROWN: string;
  MATERIAL_CYAN: string;
  MATERIAL_LIME: string;
  MATERIAL_DEEP_ORANGE: string;
  MATERIAL_LIGHT_BLUE: string;
  MATERIAL_AMBER: string;
  MATERIAL_INDIGO: string;
  MATERIAL_LIGHT_GREEN: string;
  MATERIAL_DEEP_PURPLE: string;
  MATERIAL_YELLOW_GREEN: string;
  MATERIAL_DEEP_CYAN: string;
  MATERIAL_DEEP_GREEN: string;
  MATERIAL_LIGHT_YELLOW: string;
  MATERIAL_LIGHT_RED: string;
  MATERIAL_LIGHT_GREEN_2: string;
  MATERIAL_LIGHT_ORANGE: string;
  MATERIAL_LIGHT_PURPLE: string;
  MATERIAL_LIGHT_GREY: string;
  MATERIAL_LIGHT_PINK: string;
  MATERIAL_LIGHT_TEAL: string;
  MATERIAL_DARK_BLUE: string;
  MATERIAL_DARK_GREEN: string;
  MATERIAL_DARK_PINK: string;
  MATERIAL_DARK_CYAN: string;
  MATERIAL_DARK_YELLOW: string;
  MATERIAL_DARK_RED: string;
  MATERIAL_DARK_ORANGE: string;
  MATERIAL_DARK_GREY: string;
  MATERIAL_DARK_PURPLE: string;
  MATERIAL_DARK_TEAL: string;
  MATERIAL_DARK_LIME: string;
  MATERIAL_DARK_AMBER: string;
  MATERIAL_DARK_INDIGO: string;
  MATERIAL_DARK_BROWN: string;
  MATERIAL_DARK_YELLOW_GREEN: string;
  MATERIAL_DARK_LIGHT_BLUE: string;
  MATERIAL_DARK_LIGHT_GREEN: string;
  MATERIAL_DARK_LIGHT_PINK: string;
  MATERIAL_DARK_LIGHT_PURPLE: string;
};

export declare const emoji: {
  BIG_CRY: string;
  ZI_BI: string;
  SEE_SEXY_GIRL: string;
  YE_TU_LE: string;
  XIAO_NI_MA: string;
  MANY_BUGS: string;
  FO_ZU_BAO_YOU: string;
  MEI_LIAN_JIAN_REN: string;
  XIAO_CHOU: string;
  SHUT_UP: string;
  GUI: string;
  YI_TUO_SHI: string;
  MEI_NAO_ZI: string;
  DAO_LE_CHAN_PIN: string;
  SONG_NI_SHANG_XI_TIAN: string;
  CHI_YAO_LE_DA_LANG: string;
  SHANG_XIAN_LE: string;
  BLACK_FACE: string;
  YE_ZI_SHU: string;
  SONG_SHU: string;
  XIAN_REN_ZHANG: string;
  JU_GE_LI_ZI: string;
  DIAN_ZAN: string;
  ZERO_BUG: string;
  OK: string;
  CALL_ME_TONIGHT: string;
  FINGER_RIGHT: string;
  FINGER_LEFT: string;
  FINGER_UP: string;
  FINGER_DOWN: string;
  HE_ZUO_YU_KUAI: string;
  PEI_ZHONG_DA_FEI_ZHU: string;
  NEW_BEE: string;
  WANG_WANG_DUI: string;
  NIU: string;
  KUN: string;
  WATERMELON: string;
  GREEN_TEA: string;
  APPLE: string;
  HAMBURGER: string;
  CHEERS: string;
};

export declare const getDoubleButtonConfigs: (logBy: string, logName: string, preButtonColor: string, nextButtonColor: string, ...logData: unknown[]) => unknown[];
export declare const getMaterialConfigs: (isGradient: boolean, logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
export declare const getMaterialGhostConfigs: (logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
