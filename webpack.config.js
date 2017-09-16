var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DIST_DIR = path.resolve(__dirname, 'appbuild');

var config = {
	devtool: "eval-source-map",
	/*entry: "./start.jsx",*/ /*** Uncomment only if you do npm start. but make sure all scss file included in js file.*/
	output: {
		path: DIST_DIR,
		filename: "bundle.js",
		publicPath: "/appbuild"
	},
	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				use: [{
					loader: "babel-loader",
					options: {
						sourceMap: true
					}
				}]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"],
					publicPath: '/appbuild'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: "style.css", disable: false, allChunks: true})
	],
	resolve: {
		// you can now require('file') instead of require('file.js')
		extensions: ['.js', '.json', '.jsx', '.css', '.scss']
	}
};

module.exports = config;