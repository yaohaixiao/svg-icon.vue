/**
 * vue.config.js - vue 工程配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
const path = require('path')

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
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
      if (buildFor.trim) {
        buildFor = buildFor.trim()
      }
    } else {
      buildFor = ''
    }

    config.when(buildFor === 'lib', (config) => {
      config
        .plugin('html')
        .use(HTMLWebpackPlugin)
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
            fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
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
            // fileBlacklist: [/(Api|Usage|Page|Module)(.*?)\.(js|css)$/],
            include: {
              type: 'asyncChunks',
              entries: ['app']
            }
          }
        ])

      config.optimization.splitChunks({
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
            priority: 22,
            reuseExistingChunk: true
          },
          commons: {
            name: 'chunk-commons',
            // the weight needs to be larger than libs and app, or it will be packaged into libs or app
            priority: 16,
            test: resolve('documentation/components'),
            reuseExistingChunk: true
          }
        }
      })

      // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single')
    })
  },

  transpileDependencies: true
}
