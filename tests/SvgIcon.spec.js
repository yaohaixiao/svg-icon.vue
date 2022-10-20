import { shallowMount } from '@vue/test-utils'
import SvgIcon from '../src/SvgIcon'

describe('SvgIcon.vue', () => {
  const DEFAULT_SIZE = 16
  const DEFAULT_NAME = 'edit'
  const DEFAULT_COLOR = '#ddd'

  const CANCEL = 'cancel'
  const SIZE = 28
  const COLOR = '#f00'

  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(SvgIcon, {
      // 配置组件 props 属性
      propsData: {
        size: DEFAULT_SIZE,
        name: DEFAULT_NAME,
        color: DEFAULT_COLOR
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it(`props.name 默认值：${DEFAULT_NAME}`, () => {
    expect(wrapper.vm.name).toEqual(DEFAULT_NAME)

    expect(wrapper.element).toMatchSnapshot()
  })

  it(`props.size 默认值：${DEFAULT_SIZE}`, () => {
    expect(wrapper.vm.size).toEqual(DEFAULT_SIZE)

    expect(wrapper.element).toMatchSnapshot()
  })

  it(`props.color 默认值：${DEFAULT_COLOR}`, () => {
    expect(wrapper.vm.color).toEqual(DEFAULT_COLOR)

    expect(wrapper.element).toMatchSnapshot()
  })

  it(`computed.binds 值：{'xlink:href': #icon-${DEFAULT_NAME}}`, () => {
    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.binds).toEqual(binds)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('调整 props.name 值为：cancel', async () => {
    wrapper.setProps({
      name: CANCEL
    })
    await wrapper.vm.$nextTick()

    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.name).toEqual(CANCEL)
    expect(wrapper.vm.size).toEqual(DEFAULT_SIZE)
    expect(wrapper.vm.color).toEqual(DEFAULT_COLOR)
    expect(wrapper.vm.binds).toEqual(binds)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('调整 props.size 值为：28', async () => {
    wrapper.setProps({
      name: CANCEL,
      size: SIZE
    })
    await wrapper.vm.$nextTick()

    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.name).toEqual(CANCEL)
    expect(wrapper.vm.size).toEqual(SIZE)
    expect(wrapper.vm.color).toEqual(DEFAULT_COLOR)
    expect(wrapper.vm.binds).toEqual(binds)

    expect(wrapper.element).toMatchSnapshot()
  })

  it('调整 props.color 值为：#f00', async () => {
    wrapper.setProps({
      name: CANCEL,
      color: COLOR
    })
    await wrapper.vm.$nextTick()

    const binds = {
      'xlink:href': `#icon-${wrapper.vm.name}`
    }

    expect(wrapper.vm.name).toEqual(CANCEL)
    expect(wrapper.vm.size).toEqual(SIZE)
    expect(wrapper.vm.color).toEqual(COLOR)
    expect(wrapper.vm.binds).toEqual(binds)

    expect(wrapper.element).toMatchSnapshot()
  })
})
