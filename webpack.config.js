var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: '.',
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(otf|eot|svg|ttf|woff|png)/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  }
}
