/**
 * index.js - EverIcons 图标库
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.26
 */
import arrowsSet from './arrows'
import basicSet from './basic'
import callSet from './call'
import chattingSet from './chatting'
import connectionSet from './connection'
import fileSet from './file'
import financeSet from './finance'
import foodSet from './food'
import gadgetsSet from './gadgets'
import gridSet from './grid'
import mapsSet from './maps'
import musicSet from './music'
import notificationsSet from './notifications'
import reactionsSet from './reactions'
import securitySet from './security'
import shoppingSet from './shopping'
import softwareSet from './software'
import symbolsSet from './symbols'
import timeSet from './time'
import variousSet from './various'

const symbols = []

symbols.push(...arrowsSet.symbols)
symbols.push(...basicSet.symbols)
symbols.push(...callSet.symbols)
symbols.push(...chattingSet.symbols)
symbols.push(...connectionSet.symbols)
symbols.push(...fileSet.symbols)
symbols.push(...financeSet.symbols)
symbols.push(...foodSet.symbols)
symbols.push(...gadgetsSet.symbols)
symbols.push(...gridSet.symbols)
symbols.push(...mapsSet.symbols)
symbols.push(...musicSet.symbols)
symbols.push(...notificationsSet.symbols)
symbols.push(...reactionsSet.symbols)
symbols.push(...securitySet.symbols)
symbols.push(...shoppingSet.symbols)
symbols.push(...softwareSet.symbols)
symbols.push(...symbolsSet.symbols)
symbols.push(...timeSet.symbols)
symbols.push(...variousSet.symbols)

export default {
  title: 'EverIconsSet',
  code: 'everIconsSet',
  symbols: symbols
}
