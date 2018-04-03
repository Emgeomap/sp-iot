const _path =require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path :_path.resolve(__dirname+'/public'),
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                exclude:/node_modules/,
                loader: "url-loader?limit=10000",              
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
}