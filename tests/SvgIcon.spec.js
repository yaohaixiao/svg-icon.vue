import { shallowMount } from '@vue/test-utils'

import icoMoonSet from '../documentation/assets/ico-moon'
import SvgIcon from '../src/SvgIcon'

import { render } from '@/utils/utils'

const ICON_HOME = 'moon-home'
const PATH =
  '<path d="M16 9.226l-8-6.21-8 6.21v-2.532l8-6.21 8 6.21zM14 9v6h-4v-4h-4v4h-4v-6l6-4.5z"></path>'

describe('SvgIcon.vue', () => {
  let wrapper
  const DEFAULT_SIZE = 16
  const DEFAULT_NAME = 'edit'
  const DEFAULT_COLOR = '#DDD'

  beforeAll(() => {
    wrapper = shallowMount(SvgIcon, {
      // 配置组件 props 属性
      propsData: {
        size: DEFAULT_SIZE,
        name: DEFAULT_NAME,
        color: DEFAULT_COLOR
      }
    })
  })

  it('生成组件渲染快照', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it(`props.name 默认值：${DEFAULT_NAME}`, () => {
    expect(wrapper.vm.name).toEqual(DEFAULT_NAME)
  })

  it(`props.size 默认值：${DEFAULT_SIZE}`, () => {
    expect(wrapper.vm.size).toEqual(DEFAULT_SIZE)
  })

  it(`props.color 默认值：${DEFAULT_COLOR}`, () => {
    expect(wrapper.vm.color).toEqual(DEFAULT_COLOR)
  })

  it(`computed.binds 值：{'xlink:href': #icon-${DEFAULT_NAME}}`, () => {
    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }
    expect(wrapper.vm.binds).toEqual(binds)
  })

  it('调整 props.name 值为：cancel', async () => {
    const CANCEL = 'cancel'

    wrapper.setProps({
      name: CANCEL
    })
    await wrapper.vm.$nextTick()

    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.name).toEqual(CANCEL)
    expect(wrapper.vm.binds).toEqual(binds)
  })

  it('调整 props.size 值为：28', async () => {
    const SIZE = 28
    const CANCEL = 'cancel'

    wrapper.setProps({
      size: SIZE,
      name: CANCEL
    })
    await wrapper.vm.$nextTick()

    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.size).toEqual(SIZE)
    expect(wrapper.vm.binds).toEqual(binds)
  })

  it('调整 props.color 值为：#f00', async () => {
    const COLOR = '#f00'
    const CANCEL = 'cancel'

    wrapper.setProps({
      color: COLOR,
      name: CANCEL
    })
    await wrapper.vm.$nextTick()

    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.color).toEqual(COLOR)
    expect(wrapper.vm.binds).toEqual(binds)
  })

  it('render()：加载 default 图标库', async () => {
    render()

    const $svg = document.querySelector('#svg-icons')
    const $first = $svg.firstChild
    const $last = $svg.lastChild

    expect($first.id).toEqual('icon-nav-app-store')
    expect($last.id).toEqual('icon-close')
  })

  it('render() ：加载自定义图标集', async () => {
    render(icoMoonSet)

    const $svg = document.querySelector('#svg-icons')
    const $symbols = document.querySelector(`#icon-${ICON_HOME}`)
    const $last = $svg.lastChild

    expect($symbols.innerHTML).toEqual(PATH)
    expect($last.id).toEqual('icon-moon-home3')
  })

  it('生成组件渲染快照', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
