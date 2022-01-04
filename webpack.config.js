const path = require('path');

module.exports = {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/, 
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				include: /src/, 
				use: ["style-loader", "css-loader"]
			},
		]
	},
	output: {
		path: __dirname + '/www',
	},
	devServer: {
		open: true,
		static: {
			directory: path.join(__dirname, 'www'),
		},
	}
}
