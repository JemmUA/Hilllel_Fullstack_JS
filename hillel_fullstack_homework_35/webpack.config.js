const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/movies.js',
    output: {
        filename: '[name].bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif|webp|bmp)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        },
                    },
                    'css-loader',
                    'less-loader', // Додаємо 'less-loader' для обробки .less файлів
                ],
            },

        ]
    }
}