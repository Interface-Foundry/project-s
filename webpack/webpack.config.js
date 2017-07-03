const webpack = require('webpack');
const path = require('path');

const assetsPath = path.resolve(__dirname, '../public');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'react-hot/webpack!babel'
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  engines: {
    node: "4.x"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: assetsPath,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: assetsPath,
    historyApiFallback: true,
    hot: true
  }
};