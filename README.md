# 简介

如果你在使用的是 0.0.9 及以前的版本，请查阅 README@0.0.9。

本库是一个在浏览器控制台为 console.log、console.info、console.warn、console.error 提供 Button 样式的库。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/629878059f8d46fa83f7eb6fbf1d29f2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1342&h=350&s=31760&e=png&b=282828)

本库提供了足够的默认样式，包括流行的 UI 组件库的 Button 风格，也完全支持你自定义，几乎可以配置全部的 console 本身支持的 CSS 样式。

```ts
export interface ButtonStyle {
  /** 背景 */
  background?: string;
  /** 背景色 */
  backgroundColor?: string;
  /** 背景图片 */
  backgroundImage?: string;
  /** 边框线 */
  border?: string;
  /** 圆角 */
  borderRadius?: string;
  /** 阴影 */
  boxShadow?: string;
  /** 字体色 */
  color?: string;
  /** 鼠标聚焦状态 */
  cursor?: CursorType;
  /** 盒子布局 */
  display?: string;
  /** 字体简写属性 */
  font?: string;
  /** 字体大小 */
  fontSize?: string;
  /** 字重 */
  fontWeight?: number | string;
  /** 行高 */
  lineHeight?: string;
  /** 外边距 */
  margin?: string;
  /** 内边距 */
  padding?: string;
}
```

你只需要会一个 API，就可以获得超越之前所有版本的所有 API 的能力。

# 只需要一个 API

下载 `console-log-button`。

```bash
终端> npm i console-log-button -S
终端> yarn add console-log-button
终端> pnpm i console-log-button
```

先引入 `defineButtonLog`。

```ts
import { defineButtonLog } from 'console-log-button'
```

将 `defineButtonLog` 执行的结果结构赋值给任意支持样式的 console 方法里：

```ts
console.log(...defineButtonLog(), window)
```

就这么简单，你就可以得到：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/629878059f8d46fa83f7eb6fbf1d29f2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1342&h=350&s=31760&e=png&b=282828)

即使你不传任何参数，默认提供了一个样式。

# 支持自定义样式

默认样式，是基于 `defaultConfig` 提供的。

`defaultConfig` 其实就是：

```ts
export const defaultConfig: ButtonConfig[] = [{
  content: '默认内容',
  padding: '6px 16px',
  fontSize: '14px',
  fontWeight: 600,
  color: '#fff',
  cursor: 'pointer',
  backgroundColor: colors.DEFAULT_DEEP_CYAN
}];
```

`defineButtonLog` 接受一个数组形式的配置作为入参，数组的项数就是 Button 的个数。

```ts
console.log(
  ...defineButtonLog([
    {
      content: '按钮 1',
      padding: '6px 16px',
      fontSize: '14px',
      fontWeight: 600,
      color: '#fff',
      backgroundColor: colors.DEFAULT_DEEP_CYAN
    },
    {
      content: '按钮 2',
      padding: '6px 16px',
      fontSize: '14px',
      fontWeight: 600,
      color: '#fff',
      backgroundColor: colors.MATERIAL_AMBER
    }
  ])
)
```

最终结果（按钮 1，按钮 2）：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3cb269215184efb93e2a9e2c37f9269~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1566&h=154&s=32661&e=png&b=292929)

`content` 是按钮的文字内容，`padding` 决定了按钮的大小。其他的配置请参考：`ButtonStyle` 定义。

当然，这样配置冗余代码比较多，你可以配置一个自己的风格存起来，或者直接使用 `defaultConfig`：

```ts
console.log(
  ...defineButtonLog([
    {
      ...defaultConfig[0],
      content: '按钮 1',
      backgroundColor: colors.DEFAULT_DEEP_CYAN
    },
    {
      ...defaultConfig[0],
      content: '按钮 2',
      backgroundColor: colors.MATERIAL_AMBER
    }
  ])
)
```

除了 `defaultConfig`，还提供了其他样式和有趣的玩法。

# 内置样式

`colors:` 内置 60+ 的配色。

`emoji:` 内置 40+ 有趣的 emoji 表情。

`default7Color:` 提供基础的黄橙红绿青蓝紫 7 色。

`default7GradientColor:` 提供了渐变的黄橙红绿青蓝紫 7 色。

```ts
console.log(
  ...defineButtonLog([
    {
      ...defaultConfig[0],
      content: '按钮 1',
      backgroundImage: default7GradientColor.yellow
    },
    ...
  ])
)
```

得到的结果：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b71d60dc9e1a4468a2c5934fa87d859d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1122&h=72&s=56016&e=png&b=2c2c2c)

使用 `default7GradientColor` 时背景属性使用 `backgroundImage`。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae72e7adf4a34b3eb39ccbd7df124e68~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1100&h=68&s=16726&e=png&b=fb8116)

使用 `default7Color` 或者其他非渐变颜色时背景属性使用 `backgroundColor`。

# 装饰器

装饰器是本库实现 `defineButtonLog` 的一个重要手段。

本库暴露了两个装饰器：`Colors`，`DefaultButton`，还有一个基础类：`ButtonLogImpl`。

`Colors` 对类装饰，挂载所有的 `color`。

`DefaultButton` 对方法进行装饰，在不传参的情况下对被装饰的方法注入 `defaultConfig` 。

`ButtonLogImpl` 可以扩展，或者扩展 `defineButtonLog` 方法。

基础示例：

```ts
import { Colors } from 'console-log-button';
import type { Color } from 'console-log-button';

@Colors()
class ButtonLog {
  public colors?: Color;
  
  print() {
    console.log(this.colors)
  }
}

const buttonLog = new ButtonLog();

buttonLog.print() // { DEFAULT_DEEP_CYAN: "#41b883", ...}
```

使用装饰器首先确保你的项目中的 `tsconfig.json` 配置了：`"experimentalDecorators": true`。

另外，你在项目中可能使用 `vite` 或者 `webpack`，可能不直接支持装饰器语法，你可能需要配置下 `babel`，使用插件 `@babel/plugin-proposal-decorators` 来对装饰器语法进行转换。

如果你有兴趣，可以大胆尝试，当然，你也可以自己新写装饰器。
