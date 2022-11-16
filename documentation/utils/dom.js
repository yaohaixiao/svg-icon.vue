/**
 * dom.js - DOM 操作相关的功能函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.15
 */

/**
 * 获取 el 节点下匹配 selector 选择器的 HTMLElement
 * =============================================================
 * @param {HTMLElement} el
 * @param {String} selector
 * @returns {boolean|NodeList}
 */
export const matches = (el, selector) => {
  if (!selector) {
    return false
  }

  selector[0] === '>' && (selector = selector.substring(1))

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector)
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector)
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector)
      }
    } catch (_) {
      return false
    }
  }

  return false
}

/**
 * 获取元素的父节点
 * =============================================================
 * @param {HTMLElement} el
 * @returns {*}
 */
export const getParentOrHost = (el) => {
  return el.host && el !== document && el.host.nodeType
    ? el.host
    : el.parentNode
}

/**
 * 获取 el 元素父元素最近的包含 selector 选择器的元素
 * =============================================================
 * @param {HTMLElement} el
 * @param {String} selector
 * @param {HTMLElement} ctx
 * @param {HTMLElement|Boolean} [includeCTX]
 * @returns {null|*}
 */
export const closest = (el, selector, ctx, includeCTX) => {
  if (el) {
    ctx = ctx || document

    do {
      if (
        (selector != null &&
          (selector[0] === '>'
            ? el.parentNode === ctx && matches(el, selector)
            : matches(el, selector))) ||
        (includeCTX && el === ctx)
      ) {
        return el
      }

      if (el === ctx) {
        break
      }
      /* jshint boss:true */
    } while ((el = getParentOrHost(el)))
  }

  return null
}
