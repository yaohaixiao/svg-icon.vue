import SvgIcon from './src/SvgIcon.vue'

/* istanbul ignore next */
SvgIcon.install = function (Vue) {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
