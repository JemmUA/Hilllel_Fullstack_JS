const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/movies.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[contenthash].js',
    },
};