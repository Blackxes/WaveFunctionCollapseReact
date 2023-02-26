/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const prodConfig = {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.templates + "/production.index.html",
            filename: paths.dist + "/index.html",
            publicPath: "",
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
