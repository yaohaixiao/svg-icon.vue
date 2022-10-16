# svg-icon.vue

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/svg-icon.vue)](https://www.npmjs.com/package/@yaohaixiao/svg-icon.vue)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![Coverage](https://codecov.io/gh/yaohaixiao/svg-icon.vue/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/vg-icon.vue)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/svg-icon.vue.svg)](https://github.com/yaohaixiao/svg-icon.vue/blob/master/LICENSE)

svg-icon.vue 为开发者提供了一个用来在 VUE 项目中显示 SVG 图标的工具。

## Install

### Install from the command line

```shell
npm i @yaohaixiao/svg-icon.vue
```

### Install via package.json:

```shell
"@yaohaixiao/svg-icon.vue": "1.x.x"
```


## Import package

```js
import SvgIcon from 'svg-icon.vue'

export default {
  components: {
    SvgIcon
  }
}
```


## Grammar

SvgIcon 组件使用起来十分简单，调用语法如下：

```vue
<svg-icon :name="iconName" :size="iconSize" :color="iconColor" />
```


## Options

| Name    | Type     | Default |  Description |
|---------|----------|---------|---|
| `name`  | `String` | --      |  必选，图标名称：图标库中所有图标的名称。 |
| `size`  | `Number` | 16      | 可选，用来指定 icon 图标大小。  |
| `color` | `String` | --      |  可选，用来指定 icon 图标颜色。 |



## Usage

SvgIcon 组件的使用方法如下：

### Basic

size 和 color 参数是可选的，只用设置 name 属性（ icon 的名称）即可，默认 size 值为 16px 大小。当然，也可以自定义设置 size 大小。

```vue
<svg-icon name="plugins" />
<svg-icon name="database-read" :size="24" />
<svg-icon name="database-lock" :size="32" />
```

### Set color

SvgIcon 组件即可以使用包含 icon 的父节点设置 CSS 样式控制图标颜色，也可以直接设置 color属性设置颜色。

#### Set color with CSS

通过 CSS 设置颜色，图标的颜色与 case-icon 元素的 color 值一致。

```vue
<span class="case-icon">
  <svg-icon name="database-read" :size="24" />
</span>
<span class="case-icon">
  <svg-icon name="database-lock" :size="24" />
</span>
<span class="case-icon">
  <svg-icon name="plugins" :size="24" />
</span>
```

```less
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
```

#### Set color with 'color' attribute

```vue
<span class="case-icon">
  <svg-icon name="aside-environment" :size="24" color="#07B759"/>
</span>
<span class="case-icon">
  <svg-icon name="aside-branch" :size="24" color="#507AFE"/>
</span>
<span class="case-icon">
  <svg-icon name="aside-pc" :size="24" color="#FF9901"/>
</span>
```

### Use Customized Icon Set

```vue
<span class="case-icon">
  <svg-icon name="moon-home" :size="24" />
</span>
<span class="case-icon">
  <svg-icon name="moon-home2" :size="24" />
</span>
<span class="case-icon">
  <svg-icon name="moon-home3" :size="24" />
</span>
```

```js
/**
 * ico-moon.js - icoMoon 图标集
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

// 导入 icoMoonSet 图标集
import iconSet from '$assets/ico-moon'
// 导入 render 方法
import { render } from '@/utils/utils'
// 绘制自定义图标集
render(iconSet)

// 在调用 SvgIcon 组件的 VUE 组件初始化前使用 render() 方法
export default {
  // 其他逻辑
}
```

## API Documentation

Online docs：[https://yaohaixiao.github.io/svg-icon.vue/#/docs](https://yaohaixiao.github.io/svg-icon.vue/#/docs)

### Local docs

```shell
# serve with hot reload at localhost:48081
npm run start
```


## Icon Samples

SvgIcon 组件已经内置了一些常用图标：[https://yaohaixiao.github.io/svg-icon.vue/#/samples](https://yaohaixiao.github.io/svg-icon.vue/#/samples)


## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
