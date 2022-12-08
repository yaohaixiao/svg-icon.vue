import { cloneDeep, debounce } from '$utils/utils'
import timeSlice from '$utils/time-slice'

/**
 * time-slice.js - Time Slice mixins
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.8
 */
export default function (iconSet = []) {
  return {
    data() {
      return {
        iconSet: cloneDeep(iconSet)
      }
    },
    mounted() {
      const icons = cloneDeep(this.iconSet.symbols)

      icons.splice(0, 30)

      this.draw(icons)
    },
    methods: {
      draw(icons = []) {
        const add = (symbols) => {
          this.symbols = this.symbols.concat(symbols)
        }

        this.$nextTick(() => {
          setTimeout(() => {
            while (icons.length > 0) {
              const symbols = icons.splice(0, 30)

              timeSlice(() => {
                add(symbols)
              })
            }
          }, 150)
        })
      },
      query(keyword) {
        const symbols = this.iconSet.symbols.filter((symbol) => {
          const name = this.getSymbolName(symbol).toLowerCase()

          return name.indexOf(keyword.toLowerCase()) > -1
        })
        const length = symbols.length

        this.count = length

        if (length > 30) {
          this.symbols = symbols.splice(0, 30)
          this.draw(symbols)
        } else {
          this.symbols = symbols
        }
      },
      getSymbolName(symbol) {
        const matches = symbol.match(/icon-(\w+(-\w+)*)+/)
        return matches[1] || ''
      },
      onQuery: debounce(function () {
        this.query(this.keyword)
      }, 300)
    }
  }
}
