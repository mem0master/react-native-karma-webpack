'use strict';

let path = require('path');
let BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              "presets": ["react", "es2015"]
          }
        }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            "presets": ["react", "es2015"]
        }
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    root: [
        path.resolve('app/')
    ],
    alias: {
      helpers: path.join(__dirname, '/../test/helpers'),
    }
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ]
};
