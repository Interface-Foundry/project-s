import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import rootReducer from './reducers';
import getClientId from './socket/client_id';
import remoteActionMiddleware from './socket/remote_action_middleware';
import App from './components/App';
import inventoryData from './data/inventory';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

// Create Store With Websocket Middleware to allow for Remote Redux catch.
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
