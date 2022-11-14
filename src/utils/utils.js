/**
 * utils.js - 工具函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.13
 */
import defaultSet from '../assets/default'

const symbols = []

/**
 * 绘制 Svg 图标集
 * =============================================================
 * @param {Object|Array} [iconSet] - 需要数值的图标集
 * @param {String} iconSet.title - （iconSet 为对象时）图标集标题
 * @param {Array} iconSet.symbols - （iconSet 为对象时）图标集的 symbols 数据
 */
export const render = (iconSet) => {
  const $body = document.body
  const $icons = document.createElement('div')
  const $svg = document.querySelector('#svg-icons')
  let html

  // 绘制 default 图标集
  if (!iconSet) {
    symbols.push(...defaultSet.symbols)
  } else {
    // 一次绘制多个图标集
    if (Array.isArray(iconSet)) {
      iconSet.forEach((svgSet) => {
        symbols.push(...svgSet.symbols)
      })
    } else {
      // 绘制单个（自定义的）图标集
      symbols.push(...iconSet.symbols)
    }
  }

  html = symbols.join('')

  if ($svg) {
    $svg.innerHTML += html
  } else {
    $icons.innerHTML = `<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">${html}</svg>`
    $body.insertBefore($icons.firstChild, $body.firstChild)
  }
}

/**
 * 获取所有 symbols
 * =============================================================
 * @since 2.4.0
 * @return {Array} symbols
 */
export const getSymbols = () => {
  return symbols
}
