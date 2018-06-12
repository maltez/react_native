const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        index: path.join(__dirname, "src/index.js"),
    },

    output: {
        filename: "[name].js",
        path: path.join(__dirname, "public/build")
    },

    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    mode: "none",
    plugins: [new UglifyJsPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: ["node_modules", "build"],
                use: [{ loader: "babel-loader" }]
            },
            {
                test: /\.css$/,
                exclude: ["node_modules", "build"],
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
        ]
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 3000,
        hot: true
    }
};
