import colors from './colors';
import type { ButtonConfig, Default7Color, Default7GradientColor } from './types';

export const defaultConfig: ButtonConfig[] = [{
  content: '默认内容',
  padding: '6px 16px',
  fontSize: '14px',
  fontWeight: 600,
  color: '#fff',
  cursor: 'pointer',
  backgroundColor: colors.DEFAULT_DEEP_CYAN
}];

export const default7Color: Default7Color = {
  yellow: '#FFC107',
  orange: '#ff9800',
  red: '#f44336',
  green: '#4caf50',
  cyan: '#00BCD4',
  blue: '#2196f3',
  purple: '#9C27B0',
};

export const default7GradientColor: Default7GradientColor = {
  yellow: 'linear-gradient(to right, #FDB813, #FFAA00)',
  orange: 'linear-gradient(to right, #FFA500, #FF6347)',
  red: 'linear-gradient(to right, #FF416C, #FF4B2B)',
  green: 'linear-gradient(to right, #00b09b, #96c93d)',
  cyan: 'linear-gradient(to right, #1D976C, #93F9B9)',
  blue: 'linear-gradient(to right, #2196F3, #4FC3F7)',
  purple: 'linear-gradient(to right, #DA22FF, #9733EE)',
};
