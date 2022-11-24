/**
 * rollup.config.docs.js - rollup 打包配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.23
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

const PLUGIN_CONFIG = [nodeResolve(), commonjs(), terser()]

export default [
  {
    input: 'src/assets/default/icons.js',
    output: {
      file: 'public/assets/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  }
]
