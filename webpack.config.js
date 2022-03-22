const path = require('path');
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
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      files: 'src/**/*.(js|jsx|ts|tsx)',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      overrideConfigFile: '.eslintrc.js',
      emitError: true,
      emitWarning: true,
      failOnError: true,
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
    client: {
      overlay: false,
    },
  }
}
