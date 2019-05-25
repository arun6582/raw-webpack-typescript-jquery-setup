let BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')

const dist = path.join(__dirname, 'dist')
const src = path.resolve(__dirname, 'src')

module.exports = [
  {
    mode: 'development',
    entry: {
      index: './src/entry/ts/index.ts'
    },
    output: {
      publicPath: 'http://192.168.2.2:8000/static/objects/ts/dist/',
      path: dist,
      filename: '[name].[hash].min.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@src': src,
      }
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/}
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new BundleTracker({
        path: dist,
        filename: './webpack-stats.json',
        indent: 2
      })
    ]
  }
]
