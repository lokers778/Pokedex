const path = require("path");
const entryFile = "App.js";

module.exports = {
    entry: [`./jsx/${entryFile}`],
    output: {
        filename: "out.js",
        path: path.resolve(`./build`),
    },
    devServer: {
        contentBase: path.join(__dirname, `.`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
             {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                    'sass-loader'
                ]
            }
        ]

    },

};