const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const path = require('path')

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
        clean: true
    },
});