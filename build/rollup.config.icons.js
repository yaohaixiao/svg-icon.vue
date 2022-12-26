/**
 * rollup.config.icons.js - rollup 打包 icons 配置
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
    input: 'src/assets/index.js',
    output: {
      file: 'dist/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/default/icons.js',
    output: {
      file: 'dist/default/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/brankic-1979/icons.js',
    output: {
      file: 'dist/brankic-1979/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/broccolidry/icons.js',
    output: {
      file: 'dist/broccolidry/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/eighty-shades/icons.js',
    output: {
      file: 'dist/eighty-shades/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/entypo/icons.js',
    output: {
      file: 'dist/entypo/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/ever-icons/icons.js',
    output: {
      file: 'dist/ever-icons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/feather/icons.js',
    output: {
      file: 'dist/feather/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/font-awesome/icons.js',
    output: {
      file: 'dist/font-awesome/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/hawcons/icons.js',
    output: {
      file: 'dist/hawcons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/iconic/icons.js',
    output: {
      file: 'dist/iconic/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/linecons/icons.js',
    output: {
      file: 'dist/linecons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/material/icons.js',
    output: {
      file: 'dist/material/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/meteocons/icons.js',
    output: {
      file: 'dist/meteocons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/steadysets/icons.js',
    output: {
      file: 'dist/steadysets/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/typicons/icons.js',
    output: {
      file: 'dist/typicons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/vicons/icons.js',
    output: {
      file: 'dist/vicons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/wpzoom/icons.js',
    output: {
      file: 'dist/wpzoom/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  },
  {
    input: 'src/assets/zondicons/icons.js',
    output: {
      file: 'dist/zondicons/icons.min.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: PLUGIN_CONFIG
  }
]
