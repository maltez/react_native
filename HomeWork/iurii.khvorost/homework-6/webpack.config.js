var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    mode: 'none',
    watch: true,
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: ["node_moudles", "build"],
                use : [
                    { loader: "babel-loader" }
                ]
            }
        ]
    }
};