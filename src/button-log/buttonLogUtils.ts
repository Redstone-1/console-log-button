import { getDoubleButtonConfigs, getMaterialConfigs, getMaterialGhostConfigs } from './common';
import {
  VUE_DEEP_CYAN,
  VUE_BLUE_GRAY,

  ARCO_DEEP_RED,
  ARCO_LIGHT_RED,
  ARCO_DEEP_ORANGE,
  ARCO_LIGHT_ORANGE,
  ARCO_DEEP_YELLOW,
  ARCO_LIGHT_YELLOW,
  ARCO_DEEP_GREEN,
  ARCO_LIGHT_GREEN,
  ARCO_DEEP_CYAN,
  ARCO_LIGHT_CYAN,
  ARCO_DEEP_BLUE,
  ARCO_LIGHT_BLUE,
  ARCO_DEEP_PURPLE,
  ARCO_LIGHT_PURPLE,
} from '../style';

/** vueDevtool */
const vueDevtool = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, VUE_DEEP_CYAN, VUE_BLUE_GRAY);

/** arco design */
const arcoRedOrange = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_DEEP_RED, ARCO_DEEP_ORANGE);
const arcoRedLightOrangeLight = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_LIGHT_RED, ARCO_LIGHT_ORANGE);
const arcoBluePurple = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_DEEP_BLUE, ARCO_DEEP_PURPLE);
const arcoBlueLightPurpleLight = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_LIGHT_BLUE, ARCO_LIGHT_PURPLE);
const arcoYellowGreen = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_DEEP_YELLOW, ARCO_DEEP_GREEN);
const arcoYellowLightGreenLight = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_LIGHT_YELLOW, ARCO_LIGHT_GREEN);
const arcoCyanOrange = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_DEEP_CYAN, ARCO_DEEP_ORANGE);
const arcoCyanLightOrangeLight = (logBy: string, logName: string) => getDoubleButtonConfigs(logBy, logName, ARCO_LIGHT_CYAN, ARCO_LIGHT_ORANGE);



/** material */
const red = (logName: string) => getMaterialConfigs(false, logName, 'red');
const orange = (logName: string) => getMaterialConfigs(false, logName, 'orange');
const yellow = (logName: string) => getMaterialConfigs(false, logName, 'yellow');
const green = (logName: string) => getMaterialConfigs(false, logName, 'green');
const cyan = (logName: string) => getMaterialConfigs(false, logName, 'cyan');
const blue = (logName: string) => getMaterialConfigs(false, logName, 'blue');
const purple = (logName: string) => getMaterialConfigs(false, logName, 'purple');

/** material ghost */
const redGhost = (logName: string) => getMaterialGhostConfigs(logName, 'red');
const orangeGhost = (logName: string) => getMaterialGhostConfigs(logName, 'orange');
const yellowGhost = (logName: string) => getMaterialGhostConfigs(logName, 'yellow');
const greenGhost = (logName: string) => getMaterialGhostConfigs(logName, 'green');
const cyanGhost = (logName: string) => getMaterialGhostConfigs(logName, 'cyan');
const blueGhost = (logName: string) => getMaterialGhostConfigs(logName, 'blue');
const purpleGhost = (logName: string) => getMaterialGhostConfigs(logName, 'purple');

/** material linearGradient */
const redLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'red');
const orangeLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'orange');
const yellowLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'yellow');
const greenLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'green');
const cyanLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'cyan');
const blueLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'blue');
const purpleLinearGradient = (logName: string) => getMaterialConfigs(true, logName, 'purple');

export const buttonLogUtils = {
  vueDevtool,

  arcoRedOrange,
  arcoRedLightOrangeLight,
  arcoBluePurple,
  arcoBlueLightPurpleLight,
  arcoYellowGreen,
  arcoYellowLightGreenLight,
  arcoCyanOrange,
  arcoCyanLightOrangeLight,

  red,
  orange,
  yellow,
  green,
  cyan,
  blue,
  purple,

  redGhost,
  orangeGhost,
  yellowGhost,
  greenGhost,
  cyanGhost,
  blueGhost,
  purpleGhost,

  redLinearGradient,
  orangeLinearGradient,
  yellowLinearGradient,
  greenLinearGradient,
  cyanLinearGradient,
  blueLinearGradient,
  purpleLinearGradient
};
