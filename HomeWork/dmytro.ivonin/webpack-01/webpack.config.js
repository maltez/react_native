var path = require('path');
var {optimize: { UglifyJsPlugin }} = require('webpack');

module.exports = {
    entry: {
        init: path.join(__dirname, 'src/init.js'),
        home: path.join(__dirname, 'src/home.css')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.css']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use: [
                    { 
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 9000
    },
    plugins: [new UglifyJsPlugin()],
    devtool: 'source-map',

};