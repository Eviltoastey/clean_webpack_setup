const path = require('path');

const {
    NODE_ENV = 'production',
  } = process.env;
  
module.exports = {
    entry: './src/app.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname + '/dist'),
        publicPath: 'dist' 
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
        extensions: ['.ts', '.js'],
    }
}