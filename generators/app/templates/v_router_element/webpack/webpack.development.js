const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = () =>({
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }
    })
  ]
});
