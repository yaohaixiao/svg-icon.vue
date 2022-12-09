<template>
  <div :class="className">
    <total
      v-if="showTotal"
      :total="total" />
    <prev
      v-if="showPrev"
      :text="prevText"
      :page="page"
      :max="pages"
      :disabled="disabled"
      @prev="onChange" />
    <ul
      v-if="showPager"
      class="base-pagination__list">
      <pager
        :page="1"
        :current="current"
        :border="border"
        :disabled="disabled"
        @click="onChange" />
      <pager
        v-if="isQuickPrevVisible"
        :page="quickPrevPage"
        :border="false"
        class="base-pagination-pager_prev"
        @mouseenter.native.stop="onQuickPrevMouseEnter"
        @mouseleave.native.stop="onQuickPrevMouseLeave"
        @click="onChange">
        <svg-icon
          :name="quickPrevIcon"
          :size="12" />
      </pager>
      <template v-if="range.length > 0">
        <pager
          v-for="i in range"
          :key="`pager-${i}`"
          :page="i"
          :current="current"
          :border="border"
          :disabled="disabled"
          @click="onChange" />
      </template>
      <template v-if="isQuickNextVisible">
        <pager
          :page="quickNextPage"
          :border="false"
          class="base-pagination-pager_next"
          @mouseenter.native.stop="onQuickNextMouseEnter"
          @mouseleave.native.stop="onQuickNextMouseLeave"
          @click="onChange">
          <svg-icon
            :name="quickNextIcon"
            :size="12" />
        </pager>
        <pager
          :page="pages"
          :current="current"
          :border="border"
          :disabled="disabled"
          @click="onChange" />
      </template>
    </ul>
    <next
      v-if="showNext"
      :text="nextText"
      :page="page"
      :max="pages"
      :disabled="disabled"
      @next="onChange" />
  </div>
</template>

<script>
/**
 * BasePagination.vue - BasePagination 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import SvgIcon from '@/SvgIcon'

import Total from '$components/BasePagination/Total'
import Prev from '$components/BasePagination/Prev'
import Pager from '$components/BasePagination/Pager'
import Next from '$components/BasePagination/Next'

export default {
  name: 'BasePagination',
  componentName: 'BasePagination',
  components: {
    SvgIcon,
    Total,
    Prev,
    Pager,
    Next
  },
  props: {
    page: {
      type: Number,
      default: 1
    },
    pager: {
      type: Number,
      default: 7
    },
    totalCount: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    layout: {
      type: Array,
      default: () => {
        return ['total', 'prev', 'pager', 'next']
      }
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    border: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      total: 0,
      size: 20,
      current: 0,
      quickPrevHover: false,
      quickNextHover: false
    }
  },
  computed: {
    className() {
      return [
        'base-pagination',
        `util-align-${this.textAlign}`,
        this.customClass
      ]
    },
    showTotal() {
      return this.layout.includes('total')
    },
    showPrev() {
      return this.layout.includes('prev')
    },
    showPager() {
      return this.layout.includes('pager')
    },
    showNext() {
      return this.layout.includes('next')
    },
    isQuickPrevVisible() {
      const page = this.current
      const pager = this.pager
      const pages = this.pages

      return page - (pager - 3) / 2 > 2 && pages > pager
    },
    isQuickNextVisible() {
      const page = this.current
      const pager = this.pager
      const pages = this.pages

      return page + (pager - 3) / 2 < pages - 1 && pages > pager
    },
    quickPrevIcon() {
      return this.quickPrevHover ? 'aside-collapse' : 'bold-more'
    },
    quickNextIcon() {
      return this.quickNextHover ? 'aside-collapse' : 'bold-more'
    },
    quickPrevPage() {
      const page = this.current - (this.pager - 2)

      return page >= 1 ? page : 1
    },
    quickNextPage() {
      const pages = this.pages
      const page = this.current + (this.pager - 2)

      return page <= pages ? page : pages
    },
    pages() {
      return Math.ceil(this.total / this.size)
    },
    range() {
      const pages = this.pages
      const page = this.current
      const pager = this.pager
      const range = []
      let i = 1
      let len = 0

      if (pager >= pages) {
        if (pages > 1) {
          i = 2
          len = pages
        }
      } else if (this.isQuickPrevVisible) {
        i = page - (pager - 3) / 2

        if (i >= pages - pager + 2) {
          i = pages - pager + 2
        }

        if (this.isQuickNextVisible) {
          len = page + (pager - 3) / 2
        } else {
          len = pages
        }
      } else {
        if (this.isQuickNextVisible) {
          i = page - (pager - 3) / 2

          if (i <= 2) {
            i = 2
            len = pager - 1
          } else {
            len = page + (pager - 3) / 2
          }
        }
      }

      for (; i <= len; i += 1) {
        range.push(i)
      }

      return range
    }
  },
  watch: {
    totalCount() {
      this.update()
    },
    page() {
      this.update()
    },
    size() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.total = this.totalCount
      this.current = this.page
      this.size = this.pageSize
    },
    change(page) {
      this.current = page
      this.$emit('page-change', page)
    },
    onChange(page) {
      this.change(page)
    },
    onQuickPrevMouseEnter() {
      this.quickPrevHover = true
    },
    onQuickPrevMouseLeave() {
      this.quickPrevHover = false
    },
    onQuickNextMouseEnter() {
      this.quickNextHover = true
    },
    onQuickNextMouseLeave() {
      this.quickNextHover = false
    }
  }
}
</script>

<style lang="less">
@import './base-pagination';
</style>
