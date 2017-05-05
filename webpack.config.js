var path = require('path');
var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {

        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
        ]
    },

};

module.exports = config;
