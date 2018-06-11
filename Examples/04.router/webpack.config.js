var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/, /build/]
            }
        ]
    },
    devtool:'source-map',
    watch: true,
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000,
        hot: true
    }

};
