const path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin')

module.exports={
    entry : './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpakPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        )
    ]
}