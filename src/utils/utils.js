/**
 * utils.js - 工具函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.13
 */
import icons from '../assets/default'

/**
 * 绘制 svg 图标集
 * =============================================================
 * @param {Object} [iconSet] - 图标集对象数据
 * @param {String} iconSet.title - 图标集标题
 * @param {Array} iconSet.symbols - 图标集数组
 * @param {Boolean} [append] - 是否追加到内置图标集，默认值：false
 */
export const render = (iconSet, append = false) => {
  const $body = document.body
  const $firstChild = $body.firstChild
  const $icons = document.createElement('div')
  const $svg = document.querySelector('#svg-icons')
  const symbols = []
  let html = ''

  if (iconSet && iconSet.symbols) {
    if (append) {
      icons.push(iconSet)
    } else {
      symbols.push(...iconSet.symbols)
    }
  }

  icons.forEach((item) => {
    symbols.push(...item.symbols)
  })

  html = symbols.join('')

  if ($svg) {
    $svg.innerHTML = html
  } else {
    $icons.innerHTML = `<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">${html}</svg>`
    $body.insertBefore($icons.getElementsByTagName('svg')[0], $firstChild)
  }
}
