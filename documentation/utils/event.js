/**
 * event.js - 事件功能函数集合
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.8
 */

/**
 * 创建事件Hub对象函数
 * ====================================================
 * @returns {Object}
 */
export const Emitter = (() => {
  const hub = Object.create(null)

  return {
    broadcast(event, data = {}) {
      ;(hub[event] || []).forEach((handler) => handler(data))
    },
    subscribe(event, handler) {
      if (!hub[event]) {
        hub[event] = []
      }

      hub[event].push(handler)
    },
    unsubscribe(event, handler) {
      const i = (hub[event] || []).findIndex((h) => h === handler)

      if (i > -1) {
        hub[event].splice(i, 1)
      }

      if (hub[event].length === 0) {
        delete hub[event]
      }
    }
  }
})()
