/**
 * main.js - API 文档应用主入口文件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import defaultSet from '@/assets/default'
import brankic1979Set from '@/assets/brankic-1979'
import broccolidrySet from '@/assets/broccolidry'
import eightyShadesSet from '@/assets/eighty-shades'
import entypoSet from '@/assets/entypo'
import featherSet from '@/assets/feather'
import fontAwesomeSet from '@/assets/font-awesome'
import hawconsSet from '@/assets/hawcons'
import iconicSet from '@/assets/iconic'
import lineconsSet from '@/assets/linecons'
import materialSet from '@/assets/material'
import meteoconsSet from '@/assets/meteocons'
import steadysetsSet from '@/assets/steadysets'
import typiconsSet from '@/assets/typicons'
import viconsSet from '@/assets/vicons'
import wpzoomSet from '@/assets/wpzoom'
import zondiconsSet from '@/assets/zondicons'

import './plugins'
import { render } from '@/utils/utils'

Vue.config.productionTip = false

render([
  defaultSet,
  brankic1979Set,
  broccolidrySet,
  eightyShadesSet,
  entypoSet,
  featherSet,
  fontAwesomeSet,
  hawconsSet,
  iconicSet,
  lineconsSet,
  materialSet,
  meteoconsSet,
  steadysetsSet,
  typiconsSet,
  viconsSet,
  wpzoomSet,
  zondiconsSet
])

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
