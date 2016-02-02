'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../app/');

let baseConfig = require('./base');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        },
        include: [
          path.join(__dirname, '/../app')
        ]
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
        include: [].concat(
          baseConfig.additionalPaths,
          [
            path.join(__dirname, '/../app'),
            path.join(__dirname, '/../test')
          ]
        )
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    root: [
        path.resolve('app/')
    ],
    alias: {
    //   actions: srcPath + 'actions/',
      helpers: path.join(__dirname, '/../test/helpers'),
    //   components: srcPath + 'components/',
    //   sources: srcPath + 'sources/',
    //   stores: srcPath + 'stores/',
    //   styles: srcPath + 'styles/',
    //   config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ]
};
