/**
 * shared-utils.js - 公共方法 mixins
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.8
 */
import { cloneDeep, debounce } from '$utils/utils'
import { isUndefined } from '$utils/typeof'

export default function (iconSet = []) {
  return {
    data() {
      return {
        iconSet: cloneDeep(iconSet),
        querySymbols: cloneDeep(iconSet.symbols || [])
      }
    },
    methods: {
      query(keyword) {
        const size = this.size || 60
        const symbols = this.iconSet.symbols.filter((symbol) => {
          const name = this.getSymbolName(symbol).toLowerCase()

          return name.indexOf(keyword.toLowerCase()) > -1
        })
        const length = symbols.length

        this.count = length
        this.querySymbols = cloneDeep(symbols)

        if (length > size && !isUndefined(this.page)) {
          this.symbols = symbols.splice(0, size)
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
      }, 300),
      onPageChange(page) {
        const size = this.size
        const icons = cloneDeep(this.querySymbols)

        this.page = page
        this.symbols = icons.splice((page - 1) * size, size)
      }
    }
  }
}
