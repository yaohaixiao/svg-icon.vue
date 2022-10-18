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
        router: resolve('./documentation/router'),
        components: resolve('./documentation/components'),
        $assets: resolve('./documentation/assets'),
        $utils: resolve('./documentation/utils')
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
    // when process.env.npm_config_report is true , build analyzer
    config.when(process.env.npm_config_report, (config) => {
      config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin).end()
    })

    config.when(process.env.BUILD_FOR === 'docs', (config) => {
      config.plugin('html').tap((args) => {
        const description = `${pkg.description}`

        args[0].title = `svg-icon.vue - v${pkg.version} | ${description}`
        args[0].keywords = `javascript,svg,icon,svg-icon.vue,vue,vue.js`
        args[0].description = description

        return args
      })

      // it can improve the speed of the first screen, it is recommended to turn on preload
      config
        .plugin('preload')
        .use(PreloadWebpackPlugin)
        .tap(() => [
          {
            rel: 'preload',
            // to ignore runtime.js
            // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
            fileBlacklist: [/\.map$/, /runtime\..*\.js$/],
            // initial, asyncChunks, all, allAssets
            include: 'initial'
          }
        ])

      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vue: {
            name: 'chunk-vuejs',
            test: /[\\/]node_modules[\\/]_?vue(.*)/,
            priority: 20,
            chunks: 'initial',
            reuseExistingChunk: true
          },
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 18,
            reuseExistingChunk: true
          },
          icons: {
            name: 'chunk-icons',
            // the weight needs to be larger than libs and app, or it will be packaged into libs or app
            priority: 16,
            test: resolve('src/'),
            reuseExistingChunk: true
          },
          commons: {
            // split async commons chunk
            name: 'chunk-commons',
            // can customize your rules
            test: resolve('documentation/components'),
            priority: 19,
            chunks: 'async',
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
