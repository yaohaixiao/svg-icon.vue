import { render } from '@/utils/utils'
import icoMoonSet from '../documentation/assets/ico-moon'

const SVG_ICONS = 'svg-icons'
const ICON_HOME = 'moon-home'
const PATH =
  '<path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path>'

describe('utils.js', () => {
  it('render()：加载 default 图标库', async () => {
    render()

    const $svg = document.querySelector(`#${SVG_ICONS}`)

    expect($svg.id).toEqual(SVG_ICONS)
    expect($svg.getAttribute('aria-hidden')).toEqual('true')

    const $first = $svg.firstChild
    const $last = $svg.lastChild

    expect($first.id).toEqual('icon-nav-app-store')
    expect($last.id).toEqual('icon-close')
  })

  it('render(icoMoonSet) ：加载 icoMoonSet 自定义图标集', async () => {
    render(icoMoonSet)

    const $svg = document.querySelector(`#${SVG_ICONS}`)

    expect($svg.id).toEqual(SVG_ICONS)
    expect($svg.getAttribute('aria-hidden')).toEqual('true')

    const $last = $svg.lastChild

    expect($last.id).toEqual('icon-moon-home3')

    const $symbols = document.querySelector(`#icon-${ICON_HOME}`)

    expect($symbols.innerHTML).toEqual(PATH)
  })
})
