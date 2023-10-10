# 简介

本库是一个在浏览器端运行的库，主要作用是给 `console.log`、`console.info`、`console.warn`、`console.error` 几个方法提供按钮样式，增加醒目标识，同时可根据提供的特殊字符方便过滤，帮助开发者更好地排查问题。来看几个示例：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ee8c8c1a5d147308245505243c6308c~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4657137896c4fda9b7047e96cc70de6~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64497ea815df49a98f37def7b61112be~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ccf5e1d3dcfe4b93ad621109af56daa4~tplv-k3u1fbpfcp-watermark.image?)

本库提供了丰富的内置样式供使用者选择，也提供了自定义样式的 class，方便使用者自由定制。同时也暴露了一些内置的生成样式参数的 API，提供更多元化的使用方式。

具体使用方法和细节请阅读下文。

# 一、基本用法

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ee8c8c1a5d147308245505243c6308c~tplv-k3u1fbpfcp-watermark.image?)

```js
import { buttonLog } from 'console-log-button';

/**
 * 基础 log 方法
 * @param {string} logBy log 第一个按钮中的文字内容
 * @param {string} logName log 第二个按钮中的文字内容
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */
buttonLog('buttonLog', 'data', data1, data2, data3, ...)
```

# 二、进阶配置化用法

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d4657137896c4fda9b7047e96cc70de6~tplv-k3u1fbpfcp-watermark.image?)

```js
import ButtonLogClass from 'console-log-button';

const logger = new ButtonLogClass({
  logBy: 'ButtonLogClass', // log 第一个按钮中的文字内容
  logName: 'data', // log 第二个按钮中的文字内容
  preButtonColor: 'orange', // 第一个按钮颜色，接受 CSS background 的其他书写形式，例如渐变
  nextButtonColor: 'blue', // 第二个按钮颜色，接受 CSS background 的其他书写形式，例如渐变
  padding: 6, // 单位 px，决定了 button 的大小
  borderRadius: 1, // 单位 px
  fontColor: '#fff' // 字体颜色
})

/**
 * 实例调用 log 方法
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */
logger.log(data)
```

# 三、material ui 风格

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64497ea815df49a98f37def7b61112be~tplv-k3u1fbpfcp-watermark.image?)

```js
import { materialButtonLog } from 'console-log-button';

/**
 * material ui 风格 log 方法
 * @param {object} config log 配置
 * - config.logName - log 按钮中的文字内容
 * - config.type - 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple'
 * - config.isGradient 是否是渐变按钮
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */

// 非渐变
materialButtonLog({ logName = 'HELLO WORLD!', type = 'blue', isGradient = false }, data1, data2, ...)

// 渐变
materialButtonLog({ logName = 'HELLO WORLD!', type = 'blue', isGradient = true }, data1, data2, ...)
```


# 四、内置 styleValue

```js
export default {
  // vue devtool
  VUE_DEEP_CYAN: "#41b883",
  VUE_BLUE_GRAY: "#35495e",

  // arco design
  ARCO_DEEP_RED: "#F53F3F",
  ARCO_LIGHT_RED: "#F76560",
  ARCO_DEEP_ORANGE: "#FF7D00",
  ARCO_LIGHT_ORANGE: "#F77234",
  ARCO_DEEP_YELLOW: "#F7BA1E",
  ARCO_LIGHT_YELLOW: "#FADC19",
  ARCO_DEEP_GREEN: "#00B42A",
  ARCO_LIGHT_GREEN: "#9FDB1D",
  ARCO_DEEP_CYAN: "#14C9C9",
  ARCO_LIGHT_CYAN: "#37D4CF",
  ARCO_DEEP_BLUE: "#165DFF",
  ARCO_LIGHT_BLUE: "#3491FA",
  ARCO_DEEP_PURPLE: "#722ED1",
  ARCO_LIGHT_PURPLE: "#8D4EDA",

  // material ui
  MATERIAL_BLUE: "#2196f3",
  MATERIAL_GREY: "#9e9e9e",
  MATERIAL_RED: "#f44336",
  MATERIAL_YELLOW: "#ffeb3b",
  MATERIAL_GREEN: "#4caf50",
  MATERIAL_ORANGE: "#ff9800",
  MATERIAL_PURPLE: "#9c27b0",
  MATERIAL_TEAL: "#009688",
  MATERIAL_PINK: "#e91e63",
  MATERIAL_BROWN: "#795548",
  MATERIAL_CYAN: "#00bcd4",
  MATERIAL_LIME: "#cddc39",
  MATERIAL_DEEP_ORANGE: "#ff5722",
  MATERIAL_LIGHT_BLUE: "#03a9f4",
  MATERIAL_AMBER: "#ffc107",
  MATERIAL_INDIGO: "#3f51b5",
  MATERIAL_LIGHT_GREEN: "#8bc34a",
  MATERIAL_DEEP_PURPLE: "#673ab7",
  MATERIAL_YELLOW_GREEN: "#9ccc65",
  MATERIAL_DEEP_CYAN: "#006064",
  MATERIAL_DEEP_GREEN: "#2e7d32",
  MATERIAL_LIGHT_YELLOW: "#fff59d",
  MATERIAL_LIGHT_RED: "#e57373",
  MATERIAL_LIGHT_GREEN_2: "#81c784",
  MATERIAL_LIGHT_ORANGE: "#ffcc80",
  MATERIAL_LIGHT_PURPLE: "#ba68c8",
  MATERIAL_LIGHT_GREY: "#bdbdbd",
  MATERIAL_LIGHT_PINK: "#f48fb1",
  MATERIAL_LIGHT_TEAL: "#4db6ac",
  MATERIAL_DARK_BLUE: "#0d47a1",
  MATERIAL_DARK_GREEN: "#1b5e20",
  MATERIAL_DARK_PINK: "#880e4f",
  MATERIAL_DARK_CYAN: "#00838f",
  MATERIAL_DARK_YELLOW: "#f9a825",
  MATERIAL_DARK_RED: "#b71c1c",
  MATERIAL_DARK_ORANGE: "#e65100",
  MATERIAL_DARK_GREY: "#616161",
  MATERIAL_DARK_PURPLE: "#4a148c",
  MATERIAL_DARK_TEAL: "#004d40",
  MATERIAL_DARK_LIME: "#827717",
  MATERIAL_DARK_AMBER: "#ff6f00",
  MATERIAL_DARK_INDIGO: "#1a237e",
  MATERIAL_DARK_BROWN: "#3e2723",
  MATERIAL_DARK_YELLOW_GREEN: "#689f38",
  MATERIAL_DARK_LIGHT_BLUE: "#01579b",
  MATERIAL_DARK_LIGHT_GREEN: "#33691e",
  MATERIAL_DARK_LIGHT_PINK: "#ad1457",
  MATERIAL_DARK_LIGHT_PURPLE: "#6a1b9a",
};
```

## 使用方法

```js
import ButtonLogClass, { styleValue } from 'console-log-button';

const logger = new ButtonLogClass({
  logBy: 'ButtonLogClass',
  logName: 'data',
  preButtonColor: styleValue.MATERIAL_RED,
  nextButtonColor: styleValue.MATERIAL_ORANGE,
  padding: 6,
  borderRadius: 1,
  fontColor: '#fff'
})
```

# 五、内置 emoji

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e3140fec84a4c94bb4a5ea1073aedae~tplv-k3u1fbpfcp-watermark.image?)

> 0.0.4 新增，将 emoji 从 styleValue 上剥离出来独立

```js
export default {
  // emoji
  BIG_CRY: "😭",
  ZI_BI: "🤐",
  SEE_SEXY_GIRL: "😍",
  YE_TU_LE: "🤮",
  XIAO_NI_MA: "😅",
  MANY_BUGS: "😱",
  FO_ZU_BAO_YOU: "😇",
  MEI_LIAN_JIAN_REN: "🙈",
  XIAO_CHOU: "🤡",
  SHUT_UP: "🤫",
  GUI: "👻",
  YI_TUO_SHI: "💩",
  MEI_NAO_ZI: "🧠",
  DAO_LE_CHAN_PIN: "🔪",
  SONG_NI_SHANG_XI_TIAN: "🚀",
  CHI_YAO_LE_DA_LANG: "💊",
  SHANG_XIAN_LE: "🎉",
  BLACK_FACE: "🌚",
  YE_ZI_SHU: "🌴",
  SONG_SHU: "🌲",
  XIAN_REN_ZHANG: "🌵",
  JU_GE_LI_ZI: "🌰",
  DIAN_ZAN: "👍",
  ZERO_BUG: "🙏",
  OK: "👌",
  CALL_ME_TONIGHT: "🤙",
  FINGER_RIGHT: "👉",
  FINGER_LEFT: "👈",
  FINGER_UP: "👆",
  FINGER_DOWN: "👇",
  HE_ZUO_YU_KUAI: "🤝",
  PEI_ZHONG_DA_FEI_ZHU: "🐷",
  NEW_BEE: "🐝",
  WANG_WANG_DUI: "🐶",
  NIU: "🐮",
  KUN: "🐔",
  WATERMELON: "🍉",
  GREEN_TEA: "🍵",
  APPLE: "🍎",
  HAMBURGER: "🍔",
  CHEERS: "🍻",
};
```

## 使用方法

```js
import { buttonLog, emoji } from 'console-log-button';

buttonLog('me', emoji.HAMBURGER, anyData);
```
# 六、buttonLogUtils

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ccf5e1d3dcfe4b93ad621109af56daa4~tplv-k3u1fbpfcp-watermark.image?)

> 0.0.4 新增

之前的方法在 0.0.4 之前都有点问题。

- 一是没有良好的类型提示
- 二是 console 由库直接调用，在源码调试时直接定位到了库的内部

因此需要将 console 交给使用者调用，库只生成最后的样式参数。

我们希望使用者这么调用：

```js
console.log(...buttonLogUtils.vueDevtool('button-log', '测试'), 1234) // vueDevtool 接受两个参数，一个 logBy，一个 logName
console.log(...buttonLogUtils.blue('data'))
```

buttonLogUtils 上挂载的方法：

```js
export declare const buttonLogUtils: {
  vueDevtool: (logBy: string, logName: string) => unknown[];
  arcoRedOrange: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoRedLightOrangeLight: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoBluePurple: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoBlueLightPurpleLight: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoYellowGreen: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoYellowLightGreenLight: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoCyanOrange: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  arcoCyanLightOrangeLight: (logBy: string, logName: string) => unknown[]; // 0.0.8 新增
  red: (logName: string) => unknown[];
  orange: (logName: string) => unknown[];
  yellow: (logName: string) => unknown[];
  green: (logName: string) => unknown[];
  cyan: (logName: string) => unknown[];
  blue: (logName: string) => unknown[];
  purple: (logName: string) => unknown[];
  redGhost: (logName: string) => unknown[]; // 0.0.8 新增
  orangeGhost: (logName: string) => unknown[]; // 0.0.8 新增
  yellowGhost: (logName: string) => unknown[]; // 0.0.8 新增
  greenGhost: (logName: string) => unknown[]; // 0.0.8 新增
  cyanGhost: (logName: string) => unknown[]; // 0.0.8 新增
  blueGhost: (logName: string) => unknown[]; // 0.0.8 新增
  purpleGhost: (logName: string) => unknown[]; // 0.0.8 新增
  redLinearGradient: (logName: string) => unknown[];
  orangeLinearGradient: (logName: string) => unknown[];
  yellowLinearGradient: (logName: string) => unknown[];
  greenLinearGradient: (logName: string) => unknown[];
  cyanLinearGradient: (logName: string) => unknown[];
  blueLinearGradient: (logName: string) => unknown[];
  purpleLinearGradient: (logName: string) => unknown[];
};
```

这些 API 都不会直接 log，只会生成最后的样式字符串。本质上返回一个数组，产物形如：

```js
['%c', 'background: #2196f3; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;']
```

将其展开并作为 console.log 的入参即可，后面加入你自己要打印的参数。

buttonLogUtils 上目前挂载的方法比较多，如果你嫌笨重，也可以使用下面的 `构建样式参数 API`，这样未使用的 buttonLogUtils 可以 tree-shaking，减少打包体积。不过在 buttonLogUtils 内置了很多好看的配色方法，如果你对配色不是很在行，那么仍然建议你使用它。

# 七、构建样式参数 API

如果觉得调用之前的 API 都比较麻烦，我们也向外暴露了生成样式参数的 API：

## 1. getDoubleButtonConfigs

> 0.0.4 新增

针对双 button 产出样式配置，可配合 `styleValue` 配置两个 button 的背景色

```ts
export declare const getDoubleButtonConfigs: (logBy: string, logName: string, preButtonColor: string, nextButtonColor: string, ...logData: unknown[]) => unknown[];
```

```ts
import { getDoubleButtonConfigs, styleValue, emoji } from 'console-log-button';

console.log(
  ...getDoubleButtonConfigs(emoji.XIAO_CHOU, 'window', styleValue.ARCO_DEEP_RED, styleValue.ARCO_DEEP_ORANGE, window)
)
```

## 2. getMaterialConfigs

> 0.0.4 新增

针对 material 风格产出配置，目前仅支持产出库默认提供的配色，不支持传入自定义颜色

```ts
export declare const getMaterialConfigs: (isGradient: boolean, logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
```

## 3. getMaterialGhostConfigs

> 0.0.8 新增

material 风格的幽灵按钮风格，背景色透明。

```ts
export declare const getMaterialGhostConfigs: (logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
```

# API

| 参数名 | 描述 | 类型 | 默认值 | 版本要求
| --- | --- | --- | --- | --- |
| buttonLog | 双 button log | function | null |
| materialButtonLog | 单 button log 的 material 风格 | function | null |
| buttonLogUtils | buttonLog、materialButtonLog 的简化版，仅生成样式参数 | object | null | `>=0.0.4`
| getDoubleButtonConfigs | 生成双 button 样式参数，可配合 styleValue 使用 | function | null | `>=0.0.4`
| getMaterialConfigs | 生成 material button 风格样式参数 | function | null | `>=0.0.4`
| getMaterialGhostConfigs | 生成 material button 幽灵风格样式参数 | function | null | `>=0.0.8`
| styleValue | 内置样式变量 | object | null |
| emoji | 内置 emoji，0.0.6 之前绑定在 styleValue 上 | object | null | `>=0.0.6`
