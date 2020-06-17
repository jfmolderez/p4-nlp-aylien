const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        'article': './src/client/article.js',
        'tweet': './src/client/tweet.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/static/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: ["@babel/plugin-transform-runtime"]
                        //plugins: [ 'transform-class-properties', 'syntax-async-functions', 'transform-regenerator' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'article.html',
            chunks: ['article'],
            template: 'src/client/index.hbs',
            title: 'Article Extraction',
            description: 'Article Extraction',
            label: 'Article URL',
            placeholder: 'URL of article to analyze ...',
            articleActive: 'active',
            tweetActive:'',
        }),
        new HtmlWebpackPlugin({
            filename: 'tweet.html',
            chunks: ['tweet'],
            template: 'src/client/index.hbs',
            title: 'Tweet Analysis',
            description: 'Tweet Analysis',
            label: 'Tweet Sentence',
            placeholder: 'Sentence to analyze ...',
            articleActive: '',
            tweetActive:'active',
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
    ]
}