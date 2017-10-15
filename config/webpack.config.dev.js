const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const paths = require('./paths');

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(paths.appSrc, 'index.html'),
  }),
  new ExtractTextPlugin('styles.css'),
  new OpenBrowserPlugin({ url: `http://${hostname}:${port}` }),
];

const config = {
  entry: {
    app: path.join(paths.appSrc, 'app'),
  },
  output: {
    path: paths.appDist,
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
  devServer: {
    contentBase: paths.appDist,
    compress: true,
    port,
  },
};

module.exports = config;
