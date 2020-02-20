const path = require('path');
console.log(path.resolve(__dirname + 'dist'));
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname + '/dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};