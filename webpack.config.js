var path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.normalize(__dirname + '/app/main.js')],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
   {
                loader: 'babel',
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'app')],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react','es2015']
                }
            },

            {
                loader: 'style!css',
                test: /\.css$/,
                include: [path.resolve(__dirname, 'src', 'css')]
            }
        ]
    }
};