/**
 * string.js - 字符串操作相关功能函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.14
 */

/**
 * 移除字符串中的 JavaScript 代码
 * =============================================================
 * @param {String} str
 * @returns {String}
 */
export const stripScripts = (str) => {
  return str.replace(/<script[^>]*>.*?<\/script>/gi, '')
}

/**
 * 移除字符串头尾的空格
 * =============================================================
 * @param {String} str - 需要移除空格的字符串
 * @returns {String} 返回移除空格后的字符串
 */
export const trim = (str) => {
  if (str.trim) {
    return str.trim()
  } else {
    return str.replace(/^\s+/g, '').replace(/\s+$/g, '')
  }
}

/**
 * 转义字符串中的 HTML 标签
 * =============================================================
 * @param {String} str - 需要转义的字符串
 * @returns {String}
 */
export const encodeHTML = (str) => {
  const CHARTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }

  return str
    .replace(/[&<>'"]/g, (tag) => {
      return CHARTS[tag] || tag
    })
    .replace(/\{\{/g, '{ {')
}

/**
 * 将字符串中的 HTML 实体字符，转移成 HTML 标签
 * =============================================================
 * @param {String} str
 * @returns {String}
 */
export const decodeHTML = (str) => {
  const CHARTS = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#39;': "'",
    '&quot;': '"'
  }

  return str
    .replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (tag) => {
      return CHARTS[tag] || tag
    })
    .replace(/\{\s+\{/g, '{{')
}
