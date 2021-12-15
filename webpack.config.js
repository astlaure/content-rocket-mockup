const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: ['./assets/js/app.js', './assets/sass/style.scss'],
    output: {
        filename: 'js/app.js',
        path: path.resolve('public'),
        // assetModuleFilename: 'images/[name][ext][query]'
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            {
              test: /\.s?css$/,
              use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false } },
                'sass-loader'
              ],
            },
            // { test: /\.(jpg|jpeg|gif|svg|png)$/, type: 'javascript/auto' },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],
    devtool: 'source-map',
};
