# svg-icon.vue

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/svg-icon.vue)](https://www.npmjs.com/package/@yaohaixiao/svg-icon.vue)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/svg-icon.vue/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/vg-icon.vue)
[![npm downloads](https://img.shields.io/npm/dm/@yaohaixiao/svg-icon.vue)](https://npmcharts.com/compare/@yaohaixiao/svg-icon.vue?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/svg-icon.vue.svg)](https://github.com/yaohaixiao/svg-icon.vue/blob/master/LICENSE)

svg-icon.vue 为开发者提供了一个用来在 VUE 项目中显示 SVG 图标的工具。


## Install

svg-icon.vue 的安装十分简单，可以直接在命令行中运行 npm install 命令安装，也可以直接在项目的 package.js 中配置依赖：

### Install from the command line

```shell
npm i @yaohaixiao/svg-icon.vue
```

### Install via package.json:

```shell
"@yaohaixiao/svg-icon.vue": "2.x.x"
```


## API Documentation

### Online docs

Online docs：[https://yaohaixiao.github.io/svg-icon.vue/#/docs](https://yaohaixiao.github.io/svg-icon.vue/#/docs)

### Local docs

```shell
# serve with hot reload at localhost:48081
npm run start
```

### render()

SvgIcon 组件至 2.0.0 版本开始，不再直接绘制 default 图标集。需要手动导入 render() 方法。

```js
import { render } from 'svg-icon.vue/utils/utils'
```

#### Grammar

```js
render(iconSet)
```

#### Options

| Name              | Type       | Default   | Description                  |
|-------------------|------------|-----------|------------------------------|
| `iconSet`         | `Object`   | --        | 可选，图标集数据对象。                  |
| `iconSet.title`   | `String`   | --        | 必选，图标集名称。                    |
| `iconSet.symbols` | `Array`    | --        | 必选，存储 svg 图标的 symbols 数组 图标集 |

绘制 default 图标集：

```js
import { render } from 'svg-icon.vue/utils/utils'

render()
```

绘制自定义的图标集：

```js
// svg-icon.vue 内置了多个免费且设计优美的图标集：
// 01. svg-icon.vue/assets/brankic-1979
// 02. svg-icon.vue/assets/broccolidry
// 03. svg-icon.vue/assets/default
// 04. svg-icon.vue/assets/eighty-shades
// 05. svg-icon.vue/assets/entypo
// 06. svg-icon.vue/assets/feather
// 07. svg-icon.vue/assets/font-awesome
// 08. svg-icon.vue/assets/hawcons
// 09. svg-icon.vue/assets/iconic
// 10. svg-icon.vue/assets/linecons
// 11. svg-icon.vue/assets/material
// 12. svg-icon.vue/assets/meteocons
// 13. svg-icon.vue/assets/steadysets
// 14. svg-icon.vue/assets/typicons
// 15. svg-icon.vue/assets/vicons
// 16. svg-icon.vue/assets/wpzoom
// 17. svg-icon.vue/assets/zondicons
import fontAwesomeSet from 'svg-icon.vue/assets/font-awesome'
import { render } from 'svg-icon.vue/utils/utils'

render(fontAwesomeSet)
```


### Import package

使用 render() 方法绘制 svg 图标后，就可以调用 SvgIcon 组件显示图标了。

```js
// 导入SvgIcon组件
import SvgIcon from 'svg-icon.vue'

export default {
  components: {
    SvgIcon
  }
}
```

### SvgIcon 组件

SvgIcon.vue 是 svg-icon.vue 的核心组件，用来显示 render() 方法绘制的 svg 图标集中的图标。

#### Grammar

SvgIcon 组件使用起来十分简单，调用语法如下：

```vue
<svg-icon name="help" size="16" color="#999999" />
```

#### Options

| Name    | Type     | Default | Description          |
|---------|----------|---------|----------------------|
| `name`  | `String` | --      | 必选，图标名称：图标库中所有图标的名称。 |
| `size`  | `Number` | 16      | 可选，用来指定 icon 图标大小。   |
| `color` | `String` | --      | 可选，用来指定 icon 图标颜色。   |


## Usage

SvgIcon 组件的使用方法如下：

### Basic

size 和 color 参数是可选的，只用设置 name 属性（ icon 的名称）即可，默认 size 值为 16px 大小。当然，也可以自定义设置 size 大小。

```vue
<template>
  <svg-icon name="plugins" />
  <svg-icon name="database-read" :size="24" />
  <svg-icon name="database-lock" :size="32" />
</template>

<script>
import { render } from 'svg-icon.vue/utils/utils'
import SvgIcon from 'svg-icon.vue'

render()

export default {
  components: {
    SvgIcon
  }
}
</script>
```

### Set color

SvgIcon 组件即可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color 属性设置颜色。

#### Set color with CSS

通过设置 SvgIcon 父组件的 CSS 颜色，SvgIcon 组件的图标颜色将其父元素 case-icon 的 color 值一致。

```vue
<template>
  <span class="case-icon">
    <svg-icon name="database-read" :size="24" />
  </span>
  <span class="case-icon">
    <svg-icon name="database-lock" :size="24" />
  </span>
  <span class="case-icon">
    <svg-icon name="plugins" :size="24" />
  </span>
</template>

<script>
import { render } from 'svg-icon.vue/utils/utils'
import SvgIcon from 'svg-icon.vue'

render()

export default {
  components: {
    SvgIcon
  }
}
</script>

<style scoped lang="less">
  .case-icon {
    display: inline-block;
    margin: 0 8px;
    color: @third_text_color;
    vertical-align: middle;
    cursor:pointer;
    overflow: hidden;

    &:hover {
      color: @primary_color;
    }
  }
</style>
```

#### Set color with 'color' attribute

设置 color 属性后，SvgIcon 的父组件通过 CSS 设置的 color 样式将不再起作用。

```vue
<template>
  <span class="case-icon">
    <svg-icon name="aside-environment" :size="24" color="#07B759"/>
  </span>
  <span class="case-icon">
    <svg-icon name="aside-branch" :size="24" color="#507AFE"/>
  </span>
  <span class="case-icon">
    <svg-icon name="aside-pc" :size="24" color="#FF9901"/>
  </span>
</template>


<script>
import { render } from 'svg-icon.vue/utils/utils'
import SvgIcon from 'svg-icon.vue'

render()

export default {
  components: {
    SvgIcon
  }
}
</script>

<style scoped lang="less">
.case-icon {
  display: inline-block;
  margin: 0 8px;
  color: @third_text_color;
  vertical-align: middle;
  cursor:pointer;
  overflow: hidden;

  &:hover {
    color: @primary_color;
  }
}
</style>
```

### Use Customized Icon Set

```js
/**
 * ico-moon.js - icoMoon 图标集（图标集实例）
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.16
 */
const icoMoonSet = {
  title: 'icoMoon 图标集',
  symbols: [
    '<symbol id="icon-moon-home" viewBox="0 0 16 16"><path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path></symbol>',
    '<symbol id="icon-moon-home2" viewBox="0 0 16 16"><path d="M8 0.5l-8 8 1.5 1.5 1.5-1.5v6.5h4v-3h2v3h4v-6.5l1.5 1.5 1.5-1.5-8-8zM8 7c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></symbol>',
    '<symbol id="icon-moon-home3" viewBox="0 0 16 16"><path d="M16 9.5l-3-3v-4.5h-2v2.5l-3-3-8 8v0.5h2v5h5v-3h2v3h5v-5h2z"></path></symbol>'
  ]
}

export default icoMoonSet
```

```vue
<template>
  <span class="case-icon">
    <svg-icon name="moon-home" :size="24"/>
  </span>
  <span class="case-icon">
    <svg-icon name="moon-home2" :size="24"/>
  </span>
  <span class="case-icon">
    <svg-icon name="moon-home3" :size="24"/>
  </span>
</template>

<script>
import SvgIcon from 'svg-icon.vue'

import { render } from 'svg-icon.vue/utils/utils'
// 自定义图标集可以是从外部 .js 文件导入的模块
// 也可以是类似 icoMoonSet 格式的 JavaScript 对象数据
import icoMoonSet from 'assets/ico-moon'

render(icoMoonSet)

export default {
  components: {
    SvgIcon
  }
}
</script>
```


## Icons

SvgIcon 组件已经内置了一些常用图标：[https://yaohaixiao.github.io/svg-icon.vue/#/icons](https://yaohaixiao.github.io/svg-icon.vue/#/icons)


## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
