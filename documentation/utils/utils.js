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

/**
 * 防抖函数
 * =============================================================
 * @param {Function} fn 回调函数
 * @param {Number} delay 延迟时间（毫秒）
 * @returns {Function}
 */
export const debounce = (fn, delay = 300) => {
  let timer

  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

/**
 * 深拷贝对象函数
 * ================================================
 * @param {Object} obj - 深拷贝的对象
 * @returns {unknown[]|null|*}
 */
export const cloneDeep = (obj) => {
  if (obj === null) {
    return null
  }

  let clone = Object.assign({}, obj)

  Object.keys(clone).forEach((key) => {
    return (clone[key] =
      typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key])
  })

  if (Array.isArray(obj)) {
    clone.length = obj.length
    return Array.from(clone)
  }

  return clone
}
