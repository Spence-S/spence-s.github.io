const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');



const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};

const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract(['css-loader', postcss, 'sass-loader'])
};


module.exports = {
  entry: [
    `${__dirname}/css/main.scss`,
  ],
  output: {
    path: `${__dirname}/css/`,
    filename: 'main.css',
  },
  module: {
    rules: [styles]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ]
};
