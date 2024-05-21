const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const path = require('path')

module.exports = merge(config, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
    watch: true,

});