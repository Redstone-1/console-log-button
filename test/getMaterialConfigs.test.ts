import { getMaterialConfigs } from '../src/index';
import { test, expect } from 'vitest';

const restStyle = 'padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;';
const gradientRestStyle = 'padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;';

test("getMaterialConfigs not gradient", () => {
  expect(getMaterialConfigs(false, 'window', 'blue')).toStrictEqual(['%cwindow', `background: #2196f3; ${restStyle}`]);
});

test("getMaterialConfigs is gradient", () => {
  expect(getMaterialConfigs(true, 'window', 'blue')).toStrictEqual(['%cwindow', `background-image: linear-gradient(to right, #2196F3, #4FC3F7); ${gradientRestStyle}`]);
});
