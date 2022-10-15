import DevBreadcrumbItem from './src/BreadcrumbNavItem'

/* istanbul ignore next */
DevBreadcrumbItem.install = function (Vue) {
  Vue.component(DevBreadcrumbItem.name, DevBreadcrumbItem)
}

export default DevBreadcrumbItem
