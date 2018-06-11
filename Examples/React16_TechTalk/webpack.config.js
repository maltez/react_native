var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/app.js'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/, /build/, /samples/]
            }
        ]
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        inline: true,
        compress: true,
        port: 3000,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    }

};
