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
 * 创建并下载文件
 * ====================================================
 * @param {String} fileName 文件名
 * @param {String} content  文件内容
 */
export const createAndDownloadFile = (fileName, content) => {
  const $blob = new Blob([content])
  const $anchor = document.createElement('a')

  $anchor.download = fileName
  $anchor.href = URL.createObjectURL($blob)
  $anchor.click()

  URL.revokeObjectURL($blob)
}
