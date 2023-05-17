# 基本用法

```js
import { buttonLog } from 'console-log-button';

/**
 * 基础 log 方法
 * @param {string} logBy log 第一个按钮中的文字内容
 * @param {string} logName log 第二个按钮中的文字内容
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */
buttonLog('me', 'data', data1, data2, data3, ...)
```

# 进阶配置化用法

```js
import ButtonLogClass from 'console-log-button';

const buttonLog = new ButtonLogClass({
  logBy: 'me', // log 第一个按钮中的文字内容
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
buttonLog.log(data)
```

# material ui 风格

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


# 内置 styleValue

```js
// vue-devtool
export const VUE_DEEP_CYAN = "#41b883";
export const VUE_BLUE_GRAY = "#35495e";

// arco-design
export const ARCO_DEEP_BLUE = "#1f5bfb";
export const ARCO_DEEP_ORANGE = "#fe9c3e";
export const ARCO_DEEP_RED = "#f66965";
export const ARCO_DEEP_GREEN = "#27c24a";
export const ARCO_LIGHT_BLUE = "#96bdfd";
export const ARCO_LIGHT_ORANGE = "#fff7e8";
export const ARCO_LIGHT_RED = "#ffece9";
export const ARCO_LIGHT_GREEN = "#e8ffeb";

// material ui
export const MATERIAL_BLUE = "#2196f3";
export const MATERIAL_GREY = "#9e9e9e";
export const MATERIAL_RED = "#f44336";
export const MATERIAL_YELLOW = "#ffeb3b";
export const MATERIAL_GREEN = "#4caf50";
export const MATERIAL_ORANGE = "#ff9800";
export const MATERIAL_PURPLE = "#9c27b0";
export const MATERIAL_TEAL = "#009688";
export const MATERIAL_PINK = "#e91e63";
export const MATERIAL_BROWN = "#795548";
export const MATERIAL_CYAN = "#00bcd4";
export const MATERIAL_LIME = "#cddc39";
export const MATERIAL_DEEP_ORANGE = "#ff5722";
export const MATERIAL_LIGHT_BLUE = "#03a9f4";
export const MATERIAL_AMBER = "#ffc107";
export const MATERIAL_INDIGO = "#3f51b5";
export const MATERIAL_LIGHT_GREEN = "#8bc34a";
export const MATERIAL_DEEP_PURPLE = "#673ab7";
export const MATERIAL_YELLOW_GREEN = "#9ccc65";
export const MATERIAL_DEEP_CYAN = "#006064";
export const MATERIAL_DEEP_GREEN = "#2e7d32";
export const MATERIAL_LIGHT_YELLOW = "#fff59d";
export const MATERIAL_LIGHT_RED = "#e57373";
export const MATERIAL_LIGHT_GREEN_2 = "#81c784";
export const MATERIAL_LIGHT_ORANGE = "#ffcc80";
export const MATERIAL_LIGHT_PURPLE = "#ba68c8";
export const MATERIAL_LIGHT_GREY = "#bdbdbd";
export const MATERIAL_LIGHT_PINK = "#f48fb1";
export const MATERIAL_LIGHT_TEAL = "#4db6ac";
export const MATERIAL_DARK_BLUE = "#0d47a1";
export const MATERIAL_DARK_GREEN = "#1b5e20";
export const MATERIAL_DARK_PINK = "#880e4f";
export const MATERIAL_DARK_CYAN = "#00838f";
export const MATERIAL_DARK_YELLOW = "#f9a825";
export const MATERIAL_DARK_RED = "#b71c1c";
export const MATERIAL_DARK_ORANGE = "#e65100";
export const MATERIAL_DARK_GREY = "#616161";
export const MATERIAL_DARK_PURPLE = "#4a148c";
export const MATERIAL_DARK_TEAL = "#004d40";
export const MATERIAL_DARK_LIME = "#827717";
export const MATERIAL_DARK_AMBER = "#ff6f00";
export const MATERIAL_DARK_INDIGO = "#1a237e";
export const MATERIAL_DARK_BROWN = "#3e2723";
export const MATERIAL_DARK_YELLOW_GREEN = "#689f38";
export const MATERIAL_DARK_LIGHT_BLUE = "#01579b";
export const MATERIAL_DARK_LIGHT_GREEN = "#33691e";
export const MATERIAL_DARK_LIGHT_PINK = "#ad1457";
export const MATERIAL_DARK_LIGHT_PURPLE = "#6a1b9a";
```

## 使用方法

```js
import { buttonLog, styleValue } from 'console-log-button';

buttonLog('me', styleValue.VUE_DEEP_CYAN, anyData);
```

# 内置 emoji 

```js
// emoji
export const BIG_CRY = "😭";
export const ZI_BI = "🤐";
export const SEE_SEXY_GIRL = "😍";
export const YE_TU_LE = "🤮";
export const XIAO_NI_MA = "😅";
export const MANY_BUGS = "😱";
export const FO_ZU_BAO_YOU = "😇";
export const MEI_LIAN_JIAN_REN = "🙈";
export const XIAO_CHOU = "🤡";
export const SHUT_UP = "🤫";
export const GUI = "👻";
export const YI_TUO_SHI = "💩";
export const MEI_NAO_ZI = "🧠";
export const DAO_LE_CHAN_PIN = "🔪";
export const SONG_NI_SHANG_XI_TIAN = "🚀";
export const CHI_YAO_LE_DA_LANG = "💊";
export const SHANG_XIAN_LE = "🎉";
export const BLACK_FACE = "🌚";
export const YE_ZI_SHU = "🌴";
export const SONG_SHU = "🌲";
export const XIAN_REN_ZHANG = "🌵";
export const JU_GE_LI_ZI = "🌰";
export const DIAN_ZAN = "👍";
export const ZERO_BUG = "🙏";
export const OK = "👌";
export const CALL_ME_TONIGHT = "🤙";
export const FINGER_RIGHT = "👉";
export const FINGER_LEFT = "👈";
export const FINGER_UP = "👆";
export const FINGER_DOWN = "👇";
export const HE_ZUO_YU_KUAI = "🤝";
export const PEI_ZHONG_DA_FEI_ZHU = "🐷";
export const NEW_BEE = "🐝";
export const WANG_WANG_DUI = "🐶";
export const NIU = "🐮";
export const KUN = "🐔";
export const WATERMELON = "🍉";
export const GREEN_TEA = "🍵";
export const APPLE = "🍎";
export const HAMBURGER = "🍔";
export const CHEERS = "🍻";
```

## 使用方法

```js
import { buttonLog, emoji } from 'console-log-button';

buttonLog('me', emoji.HAMBURGER, anyData);
```
# buttonLogUtils

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
const buttonLogUtils = {
  // 双 button，vueDevtool 风格
  vueDevtool, 

  // 单 button，material ui 风格
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
```

这些 API 都不会直接 log，只会生成最后的样式字符串。本质上返回一个数组，产物形如：

```js
['%c', 'background: #2196f3; padding: 6px 12px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 600;']
```

将其展开并作为 console.log 的入参即可，后面加入你自己要打印的参数。

# getDoubleButtonConfigs 与 getMaterialConfigs

如果觉得调用之前的 API 都比较麻烦，这里暴露了两个内部 API，同样是生成样式参数。

## getDoubleButtonConfigs

针对双 button 产出样式配置，可配合 `styleValue` 配置两个 button 的背景色

```ts
export declare const getDoubleButtonConfigs: (logBy: string, logName: string, preButtonColor: string, nextButtonColor: string, ...logData: unknown[]) => unknown[];
```

## getMaterialConfigs

针对 material 风格产出配置，目前仅支持产出库默认提供的配色，不支持传入自定义颜色

```ts
export declare const getMaterialConfigs: (isGradient: boolean, logName: string, type: TMaterialLog, ...data: unknown[]) => unknown[];
```

# API

| 参数名 | 描述 | 类型 | 默认值 | 版本要求
| --- | --- | --- | --- | --- |
| buttonLog | 双 button log | function | null |
| materialButtonLog | 单 button log 的 material 风格 | string | null |
| buttonLogUtils | buttonLog、materialButtonLog 的简化版，仅生成样式参数 | object | null | `>=0.0.4`
| getDoubleButtonConfigs | 生成双 button 样式参数，可配合 styleValue 使用 | function | null | `>=0.0.4`
| getMaterialConfigs | 生成 material 风格样式参数 | function | null | `>=0.0.4`
| styleValue | 内置样式变量 | enum | null |
| emoji | 内置 emoji，0.0.6 之前绑定在 styleValue 上 | enum | null | `>=0.0.6`
