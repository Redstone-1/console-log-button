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
 * 这里的 logBy, logName 变成了第2、3个参数，可传可不传
 * @param {any} data 要打印的数据
 * @param {string} logBy log 第一个按钮中的文字内容
 * @param {string} logName log 第二个按钮中的文字内容
 */
buttonLog.log(data, 'me', 'data')
```

# material ui 风格

```js
import { materialButtonLog } from 'console-log-button';

/**
 * material ui 风格 log 方法
 * @param {object} config log 配置
 * - config.logName - log 按钮中的文字内容
 * - config.type - 'yellow' | 'orange' | 'red' | 'green' | 'cyan' | 'blue' | 'purple'
 * - config.isLinearGradient 是否是渐变按钮
 * @param {any} data 这里的 data 可以传多个 以 rest 参数形式会被展开
 */

// 非渐变
materialButtonLog({ logName = 'HELLO WORLD!', type = 'blue', isLinearGradient = false }, data1, data2, ...)

// 渐变
materialButtonLog({ logName = 'HELLO WORLD!', type = 'blue', isLinearGradient = true }, data1, data2, ...)
```


# 内置的一些emoji字符及颜色

```js
// vue-devtool
const DEEP_CYAN = "#41b883";
const BLUE_GRAY = "#35495e";

// arco-design
const DEEP_BLUE = "#1f5bfb";
const DEEP_ORANGE = "#fe9c3e";
const DEEP_RED = "#f66965";
const DEEP_GREEN = "#27c24a";
const LIGHT_BLUE = "#96bdfd";
const LIGHT_ORANGE = "#fff7e8";
const LIGHT_RED = "#ffece9";
const LIGHT_GREEN = "#e8ffeb";

// material ui
const BLUE = "#2196f3";
const GREY = "#9e9e9e";
const RED = "#f44336";
const YELLOW = "#ffeb3b";
const GREEN = "#4caf50";
const ORANGE = "#ff9800";
const PURPLE = "#9c27b0";
const TEAL = "#009688";
const PINK = "#e91e63";
const BROWN = "#795548";
const CYAN = "#00bcd4";
const LIME = "#cddc39";
const DEEP_ORANGE = "#ff5722";
const LIGHT_BLUE = "#03a9f4";
const AMBER = "#ffc107";
const INDIGO = "#3f51b5";
const LIGHT_GREEN = "#8bc34a";
const DEEP_PURPLE = "#673ab7";
const YELLOW_GREEN = "#9ccc65";
const DEEP_CYAN = "#006064";
const DEEP_GREEN = "#2e7d32";
const LIGHT_YELLOW = "#fff59d";
const LIGHT_RED = "#e57373";
const LIGHT_GREEN_2 = "#81c784";
const LIGHT_ORANGE = "#ffcc80";
const LIGHT_PURPLE = "#ba68c8";
const LIGHT_GREY = "#bdbdbd";
const LIGHT_PINK = "#f48fb1";
const LIGHT_TEAL = "#4db6ac";
const DARK_BLUE = "#0d47a1";
const DARK_GREEN = "#1b5e20";
const DARK_PINK = "#880e4f";
const DARK_CYAN = "#00838f";
const DARK_YELLOW = "#f9a825";
const DARK_RED = "#b71c1c";
const DARK_ORANGE = "#e65100";
const DARK_GREY = "#616161";
const DARK_PURPLE = "#4a148c";
const DARK_TEAL = "#004d40";
const DARK_LIME = "#827717";
const DARK_AMBER = "#ff6f00";
const DARK_INDIGO = "#1a237e";
const DARK_BROWN = "#3e2723";
const DARK_YELLOW_GREEN = "#689f38";
const DARK_LIGHT_BLUE = "#01579b";
const DARK_LIGHT_GREEN = "#33691e";
const DARK_LIGHT_PINK = "#ad1457";
const DARK_LIGHT_PURPLE = "#6a1b9a";

// emoji
const BIG_CRY = "😭";
const ZI_BI = "🤐";
const SEE_SEXY_GIRL = "😍";
const YE_TU_LE = "🤮";
const XIAO_NI_MA = "😅";
const MANY_BUGS = "😱";
const FO_ZU_BAO_YOU = "😇";
const MEI_LIAN_JIAN_REN = "🙈";
const XIAO_CHOU = "🤡";
const SHUT_UP = "🤫";
const GUI = "👻";
const YI_TUO_SHI = "💩";
const MEI_NAO_ZI = "🧠";
const DAO_LE_CHAN_PIN = "🔪";
const SONG_NI_SHANG_XI_TIAN = "🚀";
const CHI_YAO_LE_DA_LANG = "💊";
const SHANG_XIAN_LE = "🎉";
const BLACK_FACE = "🌚";
const YE_ZI_SHU = "🌴";
const SONG_SHU = "🌲";
const XIAN_REN_ZHANG = "🌵";
const JU_GE_LI_ZI = "🌰";
const DIAN_ZAN = "👍";
const ZERO_BUG = "🙏";
const OK = "👌";
const CALL_ME_TONIGHT = "🤙";
const FINGER_RIGHT = "👉";
const FINGER_LEFT = "👈";
const FINGER_UP = "👆";
const FINGER_DOWN = "👇";
const HE_ZUO_YU_KUAI = "🤝";
const PEI_ZHONG_DA_FEI_ZHU = "🐷";
const NEW_BEE = "🐝";
const WANG_WANG_DUI = "🐶";
const NIU = "🐮";
const KUN = "🐔";
const WATERMELON = "🍉";
const GREEN_TEA = "🍵";
const APPLE = "🍎";
const HAMBURGER = "🍔";
const CHEERS = "🍻";
```

## 使用方法

```js
import { buttonLog, styleValue } from 'console-log-button';

buttonLog('me', styleValue.HAMBURGER, anyData); // 第二个按钮的内容是 "🍔"
```