const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'inline-source-map',
  entry: [
    'babel-polyfill',
    './src/js/app.js',
    './src/scss/app.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: './js/bundle-[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: 'React Assessment',
      template: './src/index.ejs',
      appMountId: 'app'
    }),
    new ExtractTextPlugin('./css/bundle-[chunkhash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
}
