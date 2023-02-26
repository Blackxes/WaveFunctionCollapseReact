/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

const commonConfig = require("./common");
const { merge } = require("webpack-merge");
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
    entry: paths.entries + "/index.dev.tsx",
    mode: "development",
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
