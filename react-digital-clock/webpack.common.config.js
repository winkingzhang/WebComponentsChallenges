exports.app = {
    entry: './src/index.js',
    output: {
        filename: 'digital-clock-react.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'react-web-component-style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                ],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
};