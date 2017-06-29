'use strict';

// Old Socket Code, Please keep
// import makeStore from './redux/store';
// import { startSocket } from './socket/socket';

// export const store = makeStore();
// startSocket(store);

// console.log(store)
// store.dispatch({
//   type: 'SET_INVENTORY',
//   inventory: require('./data/inventory.json')
// });

import path from 'path'
import express from 'express'
import makeStore from './redux/store';
import { startSocket } from './socket/socket';
import Config from '../webpack/webpack.config.js'

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = (process.env.PORT || 3000);

const indexPath = path.join(__dirname, '../public/index.html');
const publicPath = express.static(path.join(__dirname, '../public'));

app.use('../public', publicPath);
app.all('*', function(req, res) {
  console.log(path.resolve(__dirname, indexPath))
  res.sendFile(path.resolve(__dirname, indexPath));
});

export const store = makeStore();
startSocket(store, io);

store.dispatch({
  type: 'SET_INVENTORY',
  inventory: require('./data/inventory.json')
});

app.listen(port);

