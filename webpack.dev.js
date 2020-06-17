const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'article': './src/client/article.js',
        'tweet': './src/client/tweet.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'article.html',
        port: 9000,
        // proxy : {
        //     '/api': {
        //         target: 'http://localhost:8888',
        //         secure: false,
        //         pathRewrite: {'^api': ''}
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ "@babel/plugin-transform-runtime" ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            },

        ]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'article.html',
            chunks: ['article'],
            title: 'Article Extraction',
            description: 'Article Extraction',
            label: 'Article URL',
            placeholder: 'URL of article to analyze ...',
            articleActive: 'active',
            tweetActive:'',
            serverPrefix: 'http://127.0.0.1:9000',
            html: '.html',
            template: 'src/client/index.hbs',

        }),
        new HtmlWebpackPlugin({
            filename: 'tweet.html',
            chunks: ['tweet'],
            title: 'Tweet Analysis',
            description: 'Tweet Analysis',
            label: 'Tweet Sentence',
            placeholder: 'Sentence to analyze ...',
            articleActive: '',
            tweetActive:'active',
            serverPrefix: 'http://127.0.0.1:9000',
            html: '.html',
            template: 'src/client/index.hbs'
        }),
    ]
}