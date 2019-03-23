const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.config');

module.exports = [
    merge(commonConfig.app, {
        mode: 'production',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    mangle: true,
                }
            }),
        ]
    })
];