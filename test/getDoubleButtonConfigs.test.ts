import { getDoubleButtonConfigs, styleValue } from '../src/index';
import { test, expect } from 'vitest';

test("getDoubleButtonConfigs", () => {
  expect(getDoubleButtonConfigs('xier', 'window', styleValue.ARCO_LIGHT_BLUE, styleValue.ARCO_LIGHT_ORANGE)).toStrictEqual([
    '%c log-by-xier %c window ',
    'background: #96bdfd; padding: 6px; border-radius: 1px 0 0 1px;  color: #fff',
    'background: #fff7e8; padding: 6px; border-radius: 0 1px 1px 0;  color: #fff',
  ]);
});