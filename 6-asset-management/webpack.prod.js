const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
        assetModuleFilename: 'img/[name]-[hash][ext]',
        clean: true
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css',
    })]
});