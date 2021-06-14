// 引入一个包
const path = require('path')
// 自动生成html的插件-根据模板页面生成新的页面
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除之前打包的文件
var {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {

  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[chunkhash].bundle.js"
  },

  module: {
    rules: [{
        test: /\.ts$/,
        use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      "chrome": "88"
                    },
                    "corejs": "3",
                    "useBuiltIns": "usage"
                  }
                ]

              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node-modules/
      },

      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },

          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'postcss-preset-env',
          //           {
          //             browsers: 'last 2 versions'
          //           },
          //         ],
          //       ],
          //     },
          //   },
          // },
          "less-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: 'dist/',
    open: true,
    compress: true,
    port: 9000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 使用模板./index.html根据当前的index.html页面生成新的页面
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 需要使用插件清除的文件名,当执行webpack命令时会先将指定目录下的文件删除

  ]
}

module.exports = config


// module.exports = {
//   node: '',
//   entry: "./src/index.ts",

//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: "bundle.js"
//   },

//   module: {
//     rules: [{
//       test: /\.ts$/,
//       use: 'ts-loader',
//       exclude: /node-modules/
//     }]
//   }

// }