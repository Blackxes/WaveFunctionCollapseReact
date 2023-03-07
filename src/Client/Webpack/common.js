/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

const paths = require("./paths");
const PnpWebpackPlugin = require("pnp-webpack-plugin");

// 1. import default from the plugin module
// 2. create a transformer;
// the factory additionally accepts an options object
const styledComponentsTransformer =
  require("typescript-plugin-styled-components").default();

const commonConfig = {
  entry: paths.entries + "/index.tsx",
  resolve: {
    // prettier-ignore
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss", ".svg"],
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  output: {
    path: paths.dist,
    filename: "js/[name].js",
    sourceMapFilename: "[name].map",
    publicPath: "",
    clean: true,
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webm|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/i,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(pdf|txt)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/files/[name][ext]",
        },
      },
      {
        test: /\.tsx?$/i,
        loader: "ts-loader",
        exclude: "/(node_modules|Server)/",
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.jsx?$/i,
        exclude: "/(node_modules|Server)/",
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = commonConfig;
