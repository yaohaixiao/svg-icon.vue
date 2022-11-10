import { render } from '@/utils/utils'
import defaultSet from '@/assets/default'
import icoMoonSet from '../documentation/assets/ico-moon'

const SVG_ICONS = 'svg-icons'
const ICON_HOME = 'moon-home'
const PATH =
  '<path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path>'

describe('utils.js', () => {
  it('render()：加载内置默认 default 图标库', async () => {
    render()

    const $svg = document.querySelector(`#${SVG_ICONS}`)
    const $first = $svg.firstChild
    const $last = $svg.lastChild

    expect($svg.id).toEqual(SVG_ICONS)
    expect($svg.getAttribute('aria-hidden')).toEqual('true')
    expect($first.id).toEqual('icon-nav-app-store')
    expect($last.id).toEqual('icon-close')
  })

  it('render(icoMoonSet) ：加载 icoMoonSet 单个（自定义）图标集', async () => {
    render(icoMoonSet)

    const $svg = document.querySelector(`#${SVG_ICONS}`)
    const $last = $svg.lastChild
    const $symbols = document.querySelector(`#icon-${ICON_HOME}`)

    expect($svg.id).toEqual(SVG_ICONS)
    expect($svg.getAttribute('aria-hidden')).toEqual('true')
    expect($last.id).toEqual('icon-moon-home3')
    expect($symbols.innerHTML).toEqual(PATH)
  })

  it('render([defaultSet, icoMoonSet])：一次加载多个图标集', async () => {
    render([defaultSet, icoMoonSet])

    const $svg = document.querySelector(`#${SVG_ICONS}`)
    const $first = $svg.firstChild
    const $last = $svg.lastChild
    const $symbols = document.querySelector(`#icon-${ICON_HOME}`)

    expect($svg.id).toEqual(SVG_ICONS)
    expect($svg.getAttribute('aria-hidden')).toEqual('true')
    expect($first.id).toEqual('icon-nav-app-store')
    expect($last.id).toEqual('icon-moon-home3')
    expect($symbols.innerHTML).toEqual(PATH)
  })
})
