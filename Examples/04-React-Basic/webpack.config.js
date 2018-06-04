var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/helloWorld.js'),

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
                exclude: ['node_modules', 'build'],
                use: [
                    { loader: 'babel-loader' },
                ]
            }
        ]
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        hot: true
    }

};
