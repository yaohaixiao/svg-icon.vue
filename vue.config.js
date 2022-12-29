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
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const pkg = require('./package.json')

const trim = (str) => {
  if (str.trim) {
    return str.trim()
  } else {
    return str.replace(/^\s+/g, '').replace(/\s+$/g, '')
  }
}

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
    open: true
    // historyApiFallback: {
    //   index: '/index.html'
    // }
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
        $mixins: resolve('./documentation/mixins'),
        $pages: resolve('./documentation/pages'),
        $views: resolve('./documentation/views')
      }
    },
    module: {
      rules: [
        {
          test: /\.(htm|md)(\?.*)?$/,
          loader: 'raw-loader'
        }
      ]
    },
    mode: 'production',
    optimization: {
      usedExports: true
    }
  },
  chainWebpack(config) {
    let buildFor = process.env.BUILD_FOR

    // when process.env.npm_config_report is true, build analyzer
    // 打包分析配置
    config.when(process.env.npm_config_report, (config) => {
      config.plugin('bundle-analyzer').use(BundleAnalyzerPlugin).end()
    })

    if (buildFor) {
      buildFor = trim(buildFor)
    } else {
      buildFor = ''
    }

    // 构建 API 文档的 HTMLWebpackPlugin 插件配置
    config.plugin('html').tap((args) => {
      const description = `${pkg.description}`
      // 将脚本插入到 body 标签中
      args[0].inject = 'body'
      // 使用 HtmlWebpackInlineSourcePlugin 插件将
      // app.css 公共样式写入到 index.html，以优化性能
      args[0].inlineSource = 'app.(.*?).(css)$'
      args[0].title = `svg-icon.vue - v${pkg.version} | ${description}`
      args[0].keywords = `javascript,svg,icon,svg-icon.vue,vue,vue.js`
      args[0].description = description

      return args
    })

    config.when(buildFor === 'docs', (config) => {
      // http://www.yaohaixiao.com/blog/preload-key-requests/
      // it can improve the speed of the first screen, it is recommended to turn on preload
      // 预加载资源
      config
        .plugin('preload')
        .use(PreloadWebpackPlugin)
        .tap(() => [
          {
            rel: 'preload',
            // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
            // 预加载忽略以下文件：
            // .map 文件是非必须的
            // hot-update 为本地开发时的临时文件
            // runtime.js 和 app.js 这些公共脚本使用 HtmlInlineScriptPlugin 插件写入到 index.html 文件中
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

      // http://www.yaohaixiao.com/blog/preload-key-requests/
      // prefetch 预取配置，优化前端性能
      config
        .plugin('prefetch')
        .use(PreloadWebpackPlugin)
        .tap(() => [
          {
            rel: 'prefetch',
            // 过滤掉重复的公共样式
            fileBlacklist: [/(Page|Module)(.*?)\.(js|css)$/],
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

        // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
        // minSize: 30000,

        // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
        // minChunks: 2,

        // 表示按需加载文件时，并行请求的最大数目。默认为5。
        // maxAsyncRequests: 5,

        // 表示加载入口文件时，并行请求的最大数目。默认为3。
        // maxInitialRequests: 3,

        // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
        // automaticNameDelimiter: '~',

        // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
        // name: true,

        // cacheGroups 下可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。
        // 模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules
        // 目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
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
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('documentation/components'),
            priority: 26,
            reuseExistingChunk: true
          }
        }
      })
    })
  },

  transpileDependencies: true
}
