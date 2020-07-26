const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
    mode: "development", // "production" | "development" | "none"
    target: "web", // enum
    devtool: "cheap-module-source-map",
    entry: "./src/index", // defaults to ./src | Here the application starts executing and webpack starts bundling
    output: {
        path: path.resolve(__dirname, "build"), // string | options related to how webpack emits results.
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        publicPath: "/", // string | the url to the output directory resolved relative to the HTML page
        filename: "bundle.js", // string | the filename template for entry chunks'
    },
    devServer: {
        stats: "minimal",
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico",
        }),
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        /** define file extension otherwise need import specific extensions */
        extensions: [".js", ".jsx"],
    },
};