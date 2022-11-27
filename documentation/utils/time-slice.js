/**
 * time-slice.js 时间切片功能函数
 * ====================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.27
 */
import { isFunction } from '$utils/typeof'

/**
 * 时间切片功能函数
 * ====================================================
 * @param {Function} gen
 * @return {(function(): (boolean|undefined))|*|boolean}
 */
const timeSlice = (gen) => {
  if (isFunction(gen)) {
    gen = gen()
  }

  if (!gen || !isFunction(gen.next)) {
    return false
  }

  return function next() {
    const start = performance.now()
    let res = null

    do {
      res = gen.next()
    } while (!res.done && performance.now() - start < 25)

    if (res.done) {
      return false
    }

    if (window.requestIdleCallback) {
      requestIdleCallback(next)
    } else {
      setTimeout(next, 10)
    }
  }
}

export default timeSlice
