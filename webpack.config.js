const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};