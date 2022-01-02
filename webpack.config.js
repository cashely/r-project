const path = require('path');
// -- plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[fullhash:8].js'
	},
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 9090,
		compress: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html'
		})
	]
}