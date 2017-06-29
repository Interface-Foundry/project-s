const webpack = require('webpack');
const path = require('path');

const assetsPath = path.resolve(__dirname, '../public');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader/webpack!babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: assetsPath,
    historyApiFallback: true,
    hot: true
  },
  plugins: []
};