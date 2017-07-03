import path from 'path'
import express from 'express'
import compress from 'compression'
import bodyParser from 'body-parser'
import makeStore from './redux/store'
import { startSocket } from './socket/socket'
import Config from '../webpack/webpack.config.js'

const app = express();

const port = (process.env.PORT || 3000);

const publicPath = express.static(path.join(__dirname, '../public'));

if (process.env.BUILD_MODE !== 'prebuilt' && typeof describe === 'undefined') {
  const webpackConfig = require('../webpack/webpack.config.js');
  const compiler = require('webpack')(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
    historyApiFallback: true
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    reload: true,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
} else {
  app.get('/__webpack_hmr', (req, res) => res.status(200).end())
}

app.use('../public', publicPath);

app.use(compress());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, '..', 'views')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Catch all, send to index.ejs
app.get('/', (req, res) =>
  res.render('index.ejs')
);

// Socket stuff, Hook up our app to http server so socket can listen in
const http = require('http').Server(app);
const io = require('socket.io').listen(http);

export const store = makeStore();
startSocket(store, io);

store.dispatch({
  type: 'SET_INVENTORY',
  inventory: require('./data/inventory.json')
});

http.listen(port);

