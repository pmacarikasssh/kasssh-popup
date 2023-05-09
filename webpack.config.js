const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "popup.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ],
    minimize: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "assets/images", to: "images/kasssh-popup" }],
    }),
    new MiniCssExtractPlugin({
      filename: "popup.css",
    }),
  ],
};
