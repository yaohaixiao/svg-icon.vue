import { cloneDeep } from '$utils/utils'
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
      }
    }
  }
}
