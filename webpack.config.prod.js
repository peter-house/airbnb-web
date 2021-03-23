const path = require("path");
const port = process.env.PORT || 3000;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main-pro.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"],
        resolve: { extensions: [".js", ".jsx", ".css"] },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { 
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};
