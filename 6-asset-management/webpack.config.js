const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    
    entry: './src/index.js',
    
    plugins: [new HtmlWebpackPlugin({
      template: './src/template.html'
    })
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'] // jika menggunkan sass maka ini di hapus
            // },
            {
                test: /\.m?js$/,
                exclude: /node_modules|bower_components/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env']
                    ]
                  }
                }
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  // "style-loader", // ini udh ngga di pake 
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              {
                test: /\.html$/i,
                loader: 'html-loader'
              },
              {
                test: /\.(jpeg|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
              }
        ]
    }
}