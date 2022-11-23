const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js", // indexページ用
    about: "./src/about.js", // aboutページ用
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "[name].bundle.js", // [name]がindex、aboutに置き換わる
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
