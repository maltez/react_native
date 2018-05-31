var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/init.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    plugins: [new webpack.optimize.UglifyJsPlugin()]

};