/**
 * index.js - 系统默认 SVG 图标库
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.14
 */
// 粗线条图标
import boldSet from './bold'
// 实心图标
import solidSet from './solid'
// 功能性图标
import stateSet from './state'
// 文件类图标
import fileSet from './file'
// 开发语言类图标
import languageSet from './language'
// 箭头类图标
import arrowSet from './arrow'
// 成对的图标
import pairedSet from './paired'
// 通用类图标
import genericSet from './generic'

const symbols = []

symbols.push(...boldSet.symbols)
symbols.push(...solidSet.symbols)
symbols.push(...stateSet.symbols)
symbols.push(...fileSet.symbols)
symbols.push(...languageSet.symbols)
symbols.push(...arrowSet.symbols)
symbols.push(...pairedSet.symbols)
symbols.push(...genericSet.symbols)

export default {
  title: 'Default',
  code: 'default',
  symbols: symbols
}
