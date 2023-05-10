import { buttonLogUtils } from '../src/index';
import { describe, test, expect } from 'vitest';

const restStyle = 'padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;';
const gradientRestStyle = 'padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;';

test("buttonLog.vueDevtool", () => {
  expect(buttonLogUtils.vueDevtool('xier', 'window')).toStrictEqual([
    '%c log-by-xier %c window ',
    'background: #41b883; padding: 6px; border-radius: 1px 0 0 1px;  color: #fff',
    'background: #35495e; padding: 6px; border-radius: 0 1px 1px 0;  color: #fff',
  ]);
});

describe('buttonLog not gradient', () => {
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.red('window')).toStrictEqual(['%cwindow', `background: #f44336; ${restStyle}`]);
  });
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.orange('window')).toStrictEqual(['%cwindow', `background: #ff9800; ${restStyle}`]);
  });
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.yellow('window')).toStrictEqual(['%cwindow', `background: #FFC107; ${restStyle}`]);
  });
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.green('window')).toStrictEqual(['%cwindow', `background: #4caf50; ${restStyle}`]);
  });
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.cyan('window')).toStrictEqual(['%cwindow', `background: #00BCD4; ${restStyle}`]);
  });
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.blue('window')).toStrictEqual(['%cwindow', `background: #2196f3; ${restStyle}`]);
  });
  test("buttonLog.blue", () => {
    expect(buttonLogUtils.purple('window')).toStrictEqual(['%cwindow', `background: #9C27B0; ${restStyle}`]);
  });
});

describe('buttonLog is gradient', () => {
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.redLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #FF416C, #FF4B2B); ${gradientRestStyle}`]);
  });
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.orangeLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #FFA500, #FF6347); ${gradientRestStyle}`]);
  });
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.yellowLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #FDB813, #FFAA00); ${gradientRestStyle}`]);
  });
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.greenLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #00b09b, #96c93d); ${gradientRestStyle}`]);
  });
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.cyanLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #1D976C, #93F9B9); ${gradientRestStyle}`]);
  });
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.blueLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #2196F3, #4FC3F7); ${gradientRestStyle}`]);
  });
  test("buttonLog.redLinearGradient", () => {
    expect(buttonLogUtils.purpleLinearGradient('window')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #DA22FF, #9733EE); ${gradientRestStyle}`]);
  });
});
