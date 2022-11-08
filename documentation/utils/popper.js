/**
 * popper.js - 简易弹窗控制器
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.8
 */
let index = 2000

const Popper = {
  getZIndex() {
    return index
  },
  prevZIndex() {
    index -= 1
    return index
  },
  nextZIndex() {
    index += 1
    return index
  }
}

export default Popper
