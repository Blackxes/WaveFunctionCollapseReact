/**
 * @File Stagging webpack configuration
 *
 * @Author Alexander Bassov Sun Feb 19 2023 6:39:08 PM
 * @Email blackxes.dev@gmail.com
 */

const commonConfig = require("./common");
const { merge } = require("webpack-merge");
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
    entry: paths.entries + "/index.dev.tsx",
    mode: "production",
    devtool: "eval",
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.templates + "/development.index.html",
            filename: paths.dist + "/index.html",
            publicPath: "",
        }),
    ],
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        historyApiFallback: true,
        static: paths.dist,
        proxy: {
            "/": {
                cookieDomainRewrite: { "https://picsum.photos/": "localhost" },
                withCredentials: true,
            },
        },
    },
};

module.exports = merge(commonConfig, devConfig);
