import ButtonLogClass, { buttonLog, materialButtonLog } from './baseButtonLog';
import { 
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
} from './buttonLogUtils';
import { getDoubleButtonConfigs, getMaterialConfigs } from './common';

const buttonLogUtils = {
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

export {
  buttonLog,
  materialButtonLog,

  buttonLogUtils,

  getDoubleButtonConfigs, 
  getMaterialConfigs,
};



export default ButtonLogClass;