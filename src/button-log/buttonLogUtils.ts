import { getDoubleButtonConfigs, getMaterialConfigs } from './common';
import { VUE_DEEP_CYAN, VUE_BLUE_GRAY } from '../style';

export const vueDevtool = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, VUE_DEEP_CYAN, VUE_BLUE_GRAY);

export const red = (logName: string) => getMaterialConfigs(false, logName, 'red');
export const orange = (logName: string) => getMaterialConfigs(false, logName, 'orange');
export const yellow = (logName: string) => getMaterialConfigs(false, logName, 'yellow');
export const green = (logName: string) => getMaterialConfigs(false, logName, 'green');
export const cyan = (logName: string) => getMaterialConfigs(false, logName, 'cyan');
export const blue = (logName: string) => getMaterialConfigs(false, logName, 'blue');
export const purple = (logName: string) => getMaterialConfigs(false, logName, 'purple');

export const redLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'red');
export const orangeLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'orange');
export const yellowLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'yellow');
export const greenLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'green');
export const cyanLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'cyan');
export const blueLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'blue');
export const purpleLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'purple');

export const buttonLogUtils = {
  vueDevtool,
  red,
  orange,
  yellow,
  green,
  cyan,
  blue,
  purple,
  redLinearGradient,
  orangeLinearGradient,
  yellowLinearGradient,
  greenLinearGradient,
  cyanLinearGradient,
  blueLinearGradient,
  purpleLinearGradient
};