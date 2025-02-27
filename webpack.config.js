const path = require("path");
const portfinder = require("portfinder");

module.exports = async () => {
  const port = await portfinder.getPortPromise({ port: 3000 });

  return {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      hot: true,
      open: true,
      port,
    },
  };
};
