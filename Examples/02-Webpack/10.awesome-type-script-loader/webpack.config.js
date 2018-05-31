var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/init.ts'),

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module:{
        loaders:[
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                query:{
                    useCache: false
                }
            }
        ]
    },
    watch: true
};