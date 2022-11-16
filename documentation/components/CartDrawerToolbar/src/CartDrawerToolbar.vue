<template>
  <base-toolbar
    role="toolbar"
    flex
    border
    padding="outer"
    height="inner"
    class="cart-drawer-toolbar">
    <template v-slot:left>
      <base-checkbox
        v-model="checked"
        :indeterminate="isIndeterminate"
        :disabled="disabled"
        class="cart-drawer-toolbar__checkbox"
        @change="onCheck">
        全选（{{ count }}）
      </base-checkbox>
    </template>
    <template v-slot:right>
      <base-button
        type="text"
        icon="import"
        @click="onImport">
        导入
      </base-button>
      <input
        ref="file"
        multiple
        type="file"
        accept="image/svg+xml"
        class="cart-drawer-toolbar__import"
        @change="onReadFiles" />
    </template>
  </base-toolbar>
</template>

<script>
import BaseToolbar from '$components/BaseToolbar'
import BaseCheckbox from '$components/BaseCheckbox'
import BaseButton from '$components/BaseButton'

export default {
  name: 'CartDrawerToolbar',
  componentName: 'CartDrawerToolbar',
  components: {
    BaseToolbar,
    BaseCheckbox,
    BaseButton
  },
  props: {
    isChecked: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checked: true
    }
  },
  computed: {
    disabled() {
      return this.items.length === 0
    },
    count() {
      return this.selected.length
    },
    isIndeterminate() {
      const count = this.count

      return count > 0 && count < this.items.length
    }
  },
  watch: {
    isChecked() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.checked = this.isChecked
    },
    doImport(name, content) {
      const PATTERN_VIEW_BOX = /viewBox="(.*?)"/
      const PATTERN_TITLE = /<title(([\s\S])*?)>(.*?)<\/title>/
      const PATTERN_PATH = /(<path(([\s\S])*?)>(.*?)<\/path>)/gi
      const matchTitle = content.match(PATTERN_TITLE)
      const title = matchTitle && matchTitle[3] ? matchTitle[3] : ''
      const id = `icon-${title || name}`
      const matchViewBox = content.match(PATTERN_VIEW_BOX)
      const viewBox = matchViewBox && matchViewBox[1] ? matchViewBox[1] : ''
      const paths = content.match(PATTERN_PATH)
      const symbol = `<symbol id="${id}" viewBox="${viewBox}">\n${paths.join(
        '\n'
      )}\n</symbol>`

      this.$emit('import', symbol, id)
    },
    readFiles(files) {
      let count = 0

      files.forEach((file) => {
        const reader = new FileReader()

        reader.readAsText(new Blob([file]), 'UTF-8')
        reader.addEventListener('load', (evt) => {
          const content = evt.target.result

          count += 1
          this.doImport(file.name, content)

          if (count === files.length) {
            this.$refs.file.value = ''
          }
        })
      })
    },
    onCheck() {
      this.$emit('check', this.checked, this.isIndeterminate)
    },
    onImport() {
      this.$refs.file.click()
    },
    onReadFiles(evt) {
      this.readFiles([...evt.target.files])
    }
  }
}
</script>

<style scoped lang="less">
@import './cart-drawer-toolbar';
</style>
