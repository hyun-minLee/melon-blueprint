const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

const BASE_JS = "./src/client/js/";

module.exports = {
  entry: {
    // main: BASE_JS + "main.js", 
    // "./src/client/js/myscript.js",
  // entry: {
    main: BASE_JS + "main.js", 
    myscript: BASE_JS + "myscript.js",
    
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/mycss.css",
    }),
  ],
  output: {
    filename: "js/[name].js", 
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
            publicPath: "./assets", // prefix를 아웃풋 경로로 지정
            name: "/images/[name].[ext]?[hash]", // 파일명 형식
              // name: '[name].[ext]',
              // outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'pug-loader',
            options: {
              // Pug 관련 옵션 설정
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(css|scss)$/, 
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
