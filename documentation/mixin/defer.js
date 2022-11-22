/**
 * defer.js - Defer 延迟渲染 mixin
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.22
 */
export default function (count = 10) {
  return {
    data() {
      return {
        displayPriority: 0
      }
    },
    mounted() {
      this.runDisplayPriority()
    },
    methods: {
      runDisplayPriority() {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority += 1

            if (this.displayPriority < count) {
              step()
            }
          })
        }

        step()
      },
      defer(priority) {
        return this.displayPriority >= priority
      }
    }
  }
}
