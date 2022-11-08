/**
 * storage.js - localStorage 相关功能函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.8
 */

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
