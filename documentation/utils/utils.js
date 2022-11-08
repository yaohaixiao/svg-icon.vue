/**
 * utils.js - 公共功能函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.9
 */

/**
 * 复制文本
 * =============================================================
 * @param {String} str - 要复制的文本
 */
export const copyToClipboard = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

/**
 * 转义字符串中的 HTML 标签
 * ====================================================
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
 * ====================================================
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

/**
 * 设置本地缓存
 * ====================================================
 * @param {String} key
 * @param {*} value
 */
export const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}

/**
 * 获取本地缓存
 * ====================================================
 * @param key
 * @returns {string}
 */
export const getStorage = (key) => {
  return localStorage.getItem(key)
}

/**
 * 清除本地缓存
 * ====================================================
 * @param key
 * @returns {string}
 */
export const clearStorage = (key) => {
  localStorage.removeItem(key)
}
