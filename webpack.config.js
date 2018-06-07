const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
        {
            from: 'src/react-starter.appcache',
            to: 'react-starter.appcache',
            toType: 'file'
        }
    ]),
    new CopyWebpackPlugin([
        {
            from: 'src/sw.js',
            to: 'sw.js',
            toType: 'file'
        }
    ]),
    new CopyWebpackPlugin([
        {
            from: 'src/manifest.json',
            to: 'manifest.json',
            toType: 'file'
        }
    ])
];

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: plugins,

    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: './dist'
    }
};