/**
 * utils.js - 工具函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.13
 */
import defaultSet from '../assets/default'

export const render = (iconSet) => {
  const $body = document.body
  const $icons = document.createElement('div')
  const $svg = document.querySelector('#svg-icons')
  const symbols = []
  let html

  // 绘制 default 图标集
  if (!iconSet) {
    symbols.push(...defaultSet.symbols)
  } else {
    // 绘制自定义的图标集
    symbols.push(...iconSet.symbols)
  }

  html = symbols.join('')

  if ($svg) {
    $svg.innerHTML += html
  } else {
    $icons.innerHTML = `<svg id="svg-icons" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden;">${html}</svg>`
    $body.insertBefore($icons.firstChild, $body.firstChild)
  }
}
