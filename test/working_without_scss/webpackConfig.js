var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: SRC_DIR+"/app/index.jsx",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
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
			}
		]
	}
};

module.exports = config;