import { getMaterialGhostConfigs } from '../src/index';
import { test, expect } from 'vitest';

const restStyle = `border: 2px solid #2196f3; padding: 6px 12px; border-radius: 6px; font-size: 14px; color: #2196f3; font-weight: 600;`;

test("getMaterialGhostConfigs", () => {
  expect(getMaterialGhostConfigs('window', 'blue')).toStrictEqual(['%c window ', `${restStyle}`]);
});
