var webpack = require('webpack');
var path = require('path');

var config = {
   entry:'./main.js',
    
   output: {
      path:__dirname,
      filename: 'index.js',
   },
    
   devServer: {
      inline: true,
      port: 3000
   },
    
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                
            query: {
               presets: ['env', 'react', "latest"]
            }
         }
      ]
   }
}

module.exports = config;