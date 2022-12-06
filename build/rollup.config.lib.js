/**
 * rollup.config.lib.js - rollup 打包 lib 配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.12.06
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue2'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-css-only'
import autoprefixer from 'autoprefixer'
import fs from 'fs-extra'
import CleanCSS from 'clean-css'
import terser from '@rollup/plugin-terser'

const PLUGIN_CONFIG = [
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main', 'browser']
  }),
  vue({
    css: false,
    autoprefixer: [autoprefixer]
  }),
  css({
    output: (styles) => {
      fs.ensureDirSync('dist')
      fs.writeFileSync(
        'dist/svg-icon.vue.css',
        new CleanCSS().minify(styles).styles
      )
    }
  }),
  commonjs(),
  terser()
]

const EXTERNAL = ['vue']

export default [
  // For ES6 module
  {
    input: 'index.js',
    output: {
      name: 'SvgIcon',
      file: 'dist/svg-icon.vue.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG,
    external: EXTERNAL
  },
  // For UMD module
  {
    input: 'index.js',
    output: {
      name: 'SvgIcon',
      file: 'dist/svg-icon.vue.umd.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG,
    external: EXTERNAL
  },
  // For browser module
  {
    input: 'index.js',
    output: {
      name: 'SvgIcon',
      file: 'dist/svg-icon.vue.min.js',
      format: 'iife',
      sourcemap: true,
      globals: {
        vue: 'Vue'
      }
    },
    plugins: PLUGIN_CONFIG,
    external: EXTERNAL
  }
]
