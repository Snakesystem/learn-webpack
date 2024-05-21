const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    
    entry: './src/index.js',
    
    plugins: [new HtmlWebpackPlugin({
      template: './src/template.html'
    })],
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
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    }
}