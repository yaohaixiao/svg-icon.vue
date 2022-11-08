import Vue from 'vue'
import { Emitter } from '$utils/event'

Vue.prototype.$broadcast = Emitter.broadcast
Vue.prototype.$subscribe = Emitter.subscribe
Vue.prototype.$unsubscribe = Emitter.unsubscribe
