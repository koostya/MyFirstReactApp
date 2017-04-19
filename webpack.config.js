var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'src/client-build');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = [
  {
    name: 'reactComponents',
    entry: {
      testBuild: APP_DIR + '/index.js'
    },
    output: {
      path: BUILD_DIR,
      filename: '[name].bundle.js'
    },
    module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        }
      ]
    }
  }
];

module.exports = config;