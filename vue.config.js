/**
 * vue.config.js - vue 工程配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
const path = require('path')
const _ = require('lodash')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const pkg = require('./package.json')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    host: 'localhost',
    port: 48081,
    hot: true,
    open: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './documentation/theme/index.less')]
    }
  },
  configureWebpack: {
    plugins: [
      new HtmlInlineScriptPlugin({
        scriptMatchPattern: [/runtime[.-]?(.*?)\.js$/, /app[.-]?(.*?)\.js$/]
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        vue$: 'vue/dist/vue.esm.js',
        $router: resolve('./documentation/router'),
        $components: resolve('./documentation/components'),
        $assets: resolve('./documentation/assets'),
        $utils: resolve('./documentation/utils'),
        $mixins: resolve('./documentation/mixins')
      }
    },
    module: {
      rules: [
        {
          test: /\.(htm|md)(\?.*)?$/,
          loader: 'raw-loader'
        }
      ]
    }
  },
  chainWebpack(config) {
    let buildFor = process.env.BUILD_FOR

    // when process.env.npm_config_report is true , build analyzer
    config.when(process.env.npm_config_report, (config) => {
      config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin).end()
    })

    if (buildFor) {
      buildFor = _.trim(buildFor)
    } else {
      buildFor = ''
    }

    config.when(buildFor === 'lib', (config) => {
      config
        .plugin('html')
        .use(HtmlWebpackPlugin)
        .tap(() => {
          const description = `${pkg.description}`

          return [
            {
              title: `svg-icon.vue - v${pkg.version} | ${description}`,
              keywords: `javascript,svg,icon,svg-icon.vue,vue,vue.js`,
              description: description
            }
          ]
        })
    })

    config.when(buildFor !== 'lib', (config) => {
      config
        .plugin('html')
        // .use(HTMLWebpackPlugin)
        .tap((args) => {
          const description = `${pkg.description}`
          // inject script to body
          args[0].inject = 'body'
          args[0].inlineSource = 'app.(.*?).(css)$'
          args[0].title = `svg-icon.vue - v${pkg.version} | ${description}`
          args[0].keywords = `javascript,svg,icon,svg-icon.vue,vue,vue.js`
          args[0].description = description

          return args
        })
    })

    config.when(buildFor === 'docs', (config) => {
      // it can improve the speed of the first screen, it is recommended to turn on preload
      config
        .plugin('preload')
        .use(PreloadWebpackPlugin)
        .tap(() => [
          {
            rel: 'preload',
            // to ignore runtime.js
            // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
            fileBlacklist: [
              /\.map$/,
              /hot-update\.js$/,
              /runtime[.-]?(.*?)\.js$/,
              /app[.-]?(.*?)\.(js|css)$/
            ],
            // initial, asyncChunks, all, allAssets
            include: 'initial'
          }
        ])

      // prefetch all asyncChunks
      config
        .plugin('prefetch')
        .use(PreloadWebpackPlugin)
        .tap(() => [
          {
            rel: 'prefetch',
            fileBlacklist: [/\d{3,4}\.(.*?)\.(js|css)$/],
            include: {
              type: 'asyncChunks',
              entries: ['app']
            }
          }
        ])

      // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single').splitChunks({
        // 表示选择哪些 chunks 进行分割，可选值有：
        // async
        // initial
        // all
        chunks: 'all',
        cacheGroups: {
          vue: {
            name: 'chunk-vuejs',
            test: /[\\/]node_modules[\\/]_?vue(.*)/,
            priority: 30,
            chunks: 'initial',
            reuseExistingChunk: true
          },
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 26,
            reuseExistingChunk: true
          }
        }
      })
    })
  },

  transpileDependencies: true
}
