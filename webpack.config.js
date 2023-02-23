const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./scripts/index.js",
        aboutUs: "./scripts/about-us.js",
        explore: "./scripts/explore.js",
        "login-modal": "./query/auth.js",
        "testing-upload-pictures": "./utility/pictures-api.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: "/",
        assetModuleFilename: "assets/img/[name][ext]",
    },
    module: {
        rules: [
            // {
            //   test: /\.css$/,
            //   use: [
            //     {
            //       loader: process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader
            //     },
            //     "css-loader"
            //   ]
            // }
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // ADD CSS FILES AS SUCH
        new MiniCssExtractPlugin(),

        // Add All HTML PAGES AS SUCH
        new HtmlWebpackPlugin({
            template: "./pages/index.html",
            filename: "index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template: "./pages/about-us.html",
            filename: "about-us.html",
            chunks: ["aboutUs"],
        }),
        new HtmlWebpackPlugin({
            template: "./pages/all-places.html",
            filename: "all-places.html",
            chunks: [],
        }),
        new HtmlWebpackPlugin({
            template: "./pages/explore.html",
            filename: "explore.html",
            chunks: ["explore"],
        }),
        new HtmlWebpackPlugin({
            template: "./pages/login-modal.html",
            filename: "login-modal.html",
            chunks: ["login-modal"],
        }),
        new HtmlWebpackPlugin({
            template: "./pages/testing-upload-pictures.html",
            filename: "testing-upload-pictures.html",
            chunks: ["testing-upload-pictures"],
        }),
    ],
    devServer: {
        port: 3000,
    },
    devtool: "source-map",
};
