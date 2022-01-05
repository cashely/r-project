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
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.wasm'],
	},
	module: {
		rules: [
			{
				test: /root\.js/,
				use: {
					loader: path.resolve(__dirname, 'loaders/root-loader.js'),
					options: {
						
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.jsx?/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
						],
						plugins: [
							path.resolve(__dirname, './babel-plugins/bind-loader.js')
						]
					},
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html'
		})
	]
}