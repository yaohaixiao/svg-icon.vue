import SvgIcon from './src/SvgIcon'

/* istanbul ignore next */
SvgIcon.install = function (Vue) {
  Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon
