const path = require('path');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/, 
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: /src/, 
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new ESLintPlugin({
      files: 'src/**/*.(js|jsx|ts|tsx)',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      configFile: '.eslintrc.js',
      lintDirtyModulesOnly: true,
      emitError: true,
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
  ],
  output: {
    path: __dirname + '/www',
  },
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'www'),
    },
  }
}
