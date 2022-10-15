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
