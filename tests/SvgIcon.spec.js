import {
  shallowMount
} from '@vue/test-utils'

import SvgIcon from '../src/SvgIcon'

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
})
