var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./app/assets/javascripts/frontend/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        include: path.join(__dirname, 'app/assets/javascripts'), 
        loader: "babel", 
        query: { presets: ['es2015', 'react']} 
      }
    ]    
  }
}