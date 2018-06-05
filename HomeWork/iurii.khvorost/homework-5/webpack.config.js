const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.css']
    },

    mode: "none",

    watch: true,

    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            title: 'Homework 5',
            hash: true
        }),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],

    module: {
        rules:[
            {
                test:/\.js$/,
                exclude: ['node_modules', 'build'],
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test:/\.css$/,
                exclude: ['node_modules', 'build'],
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'}
                ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000,
        hot: true
    }
};