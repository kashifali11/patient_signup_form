const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: {
      index: "/",
    },
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [/nodeModules/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: [/nodeModules/],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        exclude: [/nodeModules/],
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devtool: "inline-source-map",
};
