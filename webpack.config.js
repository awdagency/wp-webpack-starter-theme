const MiniCssExtractPLugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
// const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web'
const devtool = process.env.NODE_ENV === 'production' ? false : 'source-map'
const path = require('path')
module.exports = {
    mode:mode,
    // target: 'web',
    plugins: [
        new MiniCssExtractPLugin({
			filename: '../css/bundle.css',
		}),
        new CopyWebpackPlugin({
            patterns:[
                {from: "src/images/", to: "../images/"},
                {from: "src/plugins", to: "../plugins/"}
            ]
        })
    ],
	entry: {
		index: path.resolve(__dirname, "src/js", "bundle.js") 
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js'),
		clean: true,
		//path: path.resolve(__dirname, "build") // -> salva il file in build e non dist
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/font/],
                use:{
                    loader:"babel-loader"
                }
            },
            {
                // test: /\.s?css$/i,
                // test: /\.(s[ac]|c)ss$/i,
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPLugin.loader,"css-loader","postcss-loader","sass-loader"]
            }

        ]
    },
    devtool:devtool
}