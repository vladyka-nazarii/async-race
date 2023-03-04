/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const devServer = (isDev) =>
  !isDev
    ? {}
    : { devServer: { open: true, hot: true, client: { overlay: false }, static: resolve(__dirname, 'public') } };

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  ...devServer(develop),
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.ts$/i, use: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Async Race',
      favicon: './public/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [{ from: './public' }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new ESLintWebpackPlugin({ extensions: ['ts', 'js'] }),
  ],
  experiments: {
    topLevelAwait: true,
  },
});
