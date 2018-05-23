var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/init.js'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js']
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [ /node_modules/, /build/ ]
            }
        ]
    }
};