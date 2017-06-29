'use strict';

const port = (process.env.PORT || 3000),
  	http = require('http'),
  	WebpackDevServer = require("webpack-dev-server"),
  	webpack = require('webpack'),
  	path = require('path'),
  	express = require('express'),
  	app = express(),
  	indexPath = path.join(__dirname, '../public/index.html'),
  	publicPath = express.static(path.join(__dirname, '../public'));

let Config = require('./webpack.config.js');

app.use('../public', publicPath);

app.all('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, indexPath));
})

Config.plugins.unshift(new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}));

Config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
Config.entry.unshift('webpack/hot/only-dev-server');

Config.entry.unshift("webpack-dev-server/client?http://localhost:" + port + "/");
Config.devTool = "eval";

const compiler = webpack(Config);

const server = new WebpackDevServer(compiler, {
  	contentBase: './public',
  	publicPath: '/',
  	filename: 'bundle.js',
  	historyApiFallback: true,
  	hot: true,
  	inline: true
});

server.listen(port);


