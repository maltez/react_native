var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/app.js'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/build')
    },
    mode: 'none',
    plugins: [],
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude: ['node_modues', 'build'],
                use: [
                { loader: 'babel-loader' }
            ]
            }
        ]
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        //publicPath: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        hot: true
    }

};
