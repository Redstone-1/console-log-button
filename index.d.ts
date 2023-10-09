export type Decorator = new (...args: any[]) => any;
export type CursorType = 'auto' | 'default' | 'none' | 'pointer' | 'crosshair' | 'move' | 'text' | 'wait' | 'help' | 'not-allowed';
export interface ButtonStyle {
  /** 背景 */
  background?: string;
  /** 背景色 */
  backgroundColor?: string;
  /** 背景图片 */
  backgroundImage?: string;
  /** 边框线 */
  border?: string;
  /** 圆角 */
  borderRadius?: string;
  /** 阴影 */
  boxShadow?: string;
  /** 字体色 */
  color?: string;
  /** 鼠标聚焦状态 */
  cursor?: CursorType;
  /** 盒子布局 */
  display?: string;
  /** 字体简写属性 */
  font?: string;
  /** 字体大小 */
  fontSize?: string;
  /** 字重 */
  fontWeight?: number | string;
  /** 行高 */
  lineHeight?: string;
  /** 外边距 */
  margin?: string;
  /** 内边距 */
  padding?: string;
}
export interface ButtonConfig extends ButtonStyle {
  /** button 的内容 */
  content: string;
}
export type Color = {
  DEFAULT_DEEP_CYAN: string;
  DEFAULT_BLUE_GRAY: string;
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
export type Emoji = {
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
export type Default7Color = {
  yellow: '#FFC107';
  orange: '#ff9800';
  red: '#f44336';
  green: '#4caf50';
  cyan: '#00BCD4';
  blue: '#2196f3';
  purple: '#9C27B0';
};
export type Default7GradientColor = {
  yellow: 'linear-gradient(to right, #FDB813, #FFAA00)';
  orange: 'linear-gradient(to right, #FFA500, #FF6347)';
  red: 'linear-gradient(to right, #FF416C, #FF4B2B)';
  green: 'linear-gradient(to right, #00b09b, #96c93d)';
  cyan: 'linear-gradient(to right, #1D976C, #93F9B9)';
  blue: 'linear-gradient(to right, #2196F3, #4FC3F7)';
  purple: 'linear-gradient(to right, #DA22FF, #9733EE)';
};
export interface ButtonLog {
  colors?: Color;
  description?: string;
  getButtonStyle?: (config: ButtonConfig[]) => string[];
}

export declare const colors: Color;
export declare const emoji: Emoji;
export declare const defaultConfig: ButtonConfig;
export declare const default7Color: Default7Color;
export declare const default7GradientColor: Default7GradientColor;
export declare class ButtonLogImpl implements ButtonLog {
  colors?: Color;
  description?: string;
  defineButtonLog(config?: ButtonConfig[]): string[];
}
export declare const defineButtonLog: (config?: ButtonConfig[]) => string[];

/**
 * @ Author: xiwenge
 * @ Description: 注入 color
 */
export declare function Colors(): <T extends Decorator>(constructor: T) => {
  new(...args: any[]): {
    [x: string]: any;
    colors: Color;
  };
} & T;

export declare function DefaultButton(backgroundColor?: string): (_target: any, _attribute: any, descriptor: any) => void;

/**
 * @ Author: xiwenge
 * @ Description: 类的描述
 * @param {String} description
 */
export declare function Description(description: string): <T extends Decorator>(constructor: T) => {
  new(...args: any[]): {
    [x: string]: any;
    description: string;
  };
} & T;
